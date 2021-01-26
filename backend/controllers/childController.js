const Child = require('../models/Child');
const Vaccine = require('../models/Vaccine');
const VaccineList = require('../VaccinesList');

const handleErrors = (err) => {
    let errors = { name: '', DOB: '', gender: '' };
    if (err.message.includes('child validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.child_post = async(req, res) => {
    try {
        const child = await Child.create(req.body);
        VaccineList.forEach(async ({ name, whenToGive }) => {
            await Vaccine.create({ name, whenToGive, child: child._id })
        })
        res.status(201).json("Your child's profile has been created succcessfully");
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
}

module.exports.child_update = async (req, res) => {
    try {
        await Child.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json("Your child's data has been updated successfully");
    }
    catch (err) {
        res.status(400).json("A problem occured while updating your child's data")
    }
}

module.exports.children_post = async (req, res) => {
    try {
        const children = await Child.find({ parentId: req.body.parentId });
        res.status(201).json( children )
    }
    catch(err){
        res.status(400).json("You don't have any children registered/There is connection problem");
    }
}

module.exports.child_delete = async (req, res) => {
    try {
        await Child.findByIdAndDelete(req.params.id);
        res.status(201).json("The child's profile has been deleted");
    }
    catch (err) {
        res.status(400).json("There was a problem deleting the child's profile");
    }
}