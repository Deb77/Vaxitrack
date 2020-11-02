const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = mongoose.Schema({
    username: { type: String },
    password: { type: String }
},
    { timestammp: true }
);

doctorSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const Doctor = mongoose.model('doctor', doctorSchema);

module.exports = Doctor;