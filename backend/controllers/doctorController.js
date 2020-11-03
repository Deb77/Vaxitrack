const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const handleErrors = (err) => {
    let errors = { username: '', password: '' };
    if (err.message === 'incorrect username') {
        errors.username = 'This username is not registered';
    }
    if (err.message === 'incorrect password') {
        errors.password = 'This password is incorrect';
    }
    return errors;
}

const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

module.exports.login_post = async (req, res) => {
    const { username, password } = req.body;
    try {
        const doctor = await Doctor.login(username, password);
        const token = createToken(doctor);
        res.status(201).json({ token: token });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
}