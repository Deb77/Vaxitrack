const Parent = require('../models/Parent');
const authToken = require('../utils/authToken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

require('dotenv').config();

const handleErrors = (err) => {
    let errors = { name: '', email: '', password: '' };

    if (err.message === 'incorrect email') {
        errors.email = 'This email is not registered';
    }

    if (err.message === 'incorrect password') {
        errors.password = 'This password is incorrect';
    }

    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    if (err.message.includes('parent validation failed')) {
        
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }  
    return errors;
}

module.exports.signup_post = async(req, res) => {
    try {
        const parent = await Parent.create(req.body);
        const token = authToken.createToken(parent);
        res.status(201).json({ token: token, user: parent._id });
    }
    catch (err) {
        const erros = handleErrors(err);
        res.status(400).json({ errors: erros });
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const parent = await Parent.login(email, password);
        const token = authToken.createToken(parent);
        res.status(201).json({ token: token, user: parent._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
};

module.exports.forgotPassword_post = async (req, res) => {
    try {
        const { email } = req.body;
        if (email === '') {
            res.json({ message: "Please type in an email" });
        }
        const parent = await Parent.findOne({ email });
        if (parent === null) {
            res.json({message: "This email is not registered"})
        }
        else {
            const token = crypto.randomBytes(20).toString('hex');
            await parent.updateOne({
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 3600000,
            })
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.EMAIL_PASSWORD
                }
            })
            const mailOptions = {
                from: 'deb.mendes.9@gmail.com',
                to: email,
                subject: 'Link to reset password',
                html: `<h4>You are receiving this email because you or someone else requested the reset of password from your Vaxitrack account.</h4>` +
                    `<p>Please click on the following link, or paste this into your browser before 1 hr of receiving this email:</p>` +
                    `<p>https://vaxitrack.netlify.app/reset/${token}</p>` +
                    `<p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`
            }
            transporter.sendMail(mailOptions, (err, response) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json('Check email for reset link');
                }
            })

        }
    }
    catch (err) {
        res.status(400).json("The email does not exists/ there was an issue")
    }
}

module.exports.checkToken_post = async (req, res) => {
    try {
        const parent = await Parent.findOne({
            resetPasswordToken: req.body.resetPasswordToken,
            resetPasswordExpires: {
                $gt: Date.now()
            }
        })

        if (parent === null) {
            res.status(201).json({
                message: 'Password reset link is invalid or has expired'
            });
        }
        else {
            res.status(201).send({
                id: parent._id,
                message:'Password link is okay'
            });
        }
    }
    catch (err) {
        res.status(400).send('Password reset link is invalid or has expired')
    }
}

module.exports.updatePassword_put = async (req, res) => {
    try {
        const { id, password } = req.body;
        const parent = await Parent.findById(id);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        await parent.updateOne({
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null
        })
        res.status(201).json('Password updated successfully')
    }
    catch (err) {
        res.status(400).json('Password could not be updated please try again')
    }
}