const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const doctorSchema = Schema({
    username: { type: String },
    password: { type: String }
},
    { timestamps: true }
);

doctorSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect username');
}

const Doctor = mongoose.model('doctor', doctorSchema);

module.exports = Doctor;