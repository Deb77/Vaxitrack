const Vaccine = require('../models/Vaccine');

module.exports.vaccine_update = async (req, res) => {
    try {
        await Vaccine.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json("The vaccine information has been updated successfully");
    }
    catch (err) {
        console.log(err);
    }
}