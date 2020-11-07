const Doctor = require('../models/Doctor');
const authToken = require('../utils/authToken');

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

module.exports.login_post = async (req, res) => {
    const { username, password } = req.body;
    try {
        const doctor = await Doctor.login(username, password);
        const token = authToken.createToken(doctor);
        res.status(201).json({ token: token });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
}