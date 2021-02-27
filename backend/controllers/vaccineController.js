const Vaccine = require('../models/Vaccine');

module.exports.vaccine_post = async (req, res) => {
    try {
        const vaccines = await Vaccine.find({
            child: req.body.childId
        });
        res.status(201).json({ vaccines });
    }
    catch(err) {
        res.status(400).json("You don't have any children registered/There is connection problem");
    }
}

module.exports.vaccine_update = async (req, res) => {
    try {
        const { dueDate, administeredOn } = req.body;
        await Vaccine.findByIdAndUpdate(req.params.id, { dueDate, administeredOn });
        res.status(201).json("The vaccine information has been updated successfully");
    }
    catch (err) {
        res.status(400).json("There was an error while updating");
    }
}
