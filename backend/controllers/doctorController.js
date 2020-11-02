const Doctor = require('../models/Doctor');

module.exports.login_post = async (req, res) => {
    const { username, password } = req.body;
    try {
        const doctor = await Doctor.create({ username, password });
        res.status(201).send({ doctor });
    }
    catch (err) {
        res.status(400).send({ error: err });
    }
}