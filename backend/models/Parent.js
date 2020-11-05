const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const emailValidate = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email);
}
const parentSchema = Schema({
    parentName: {
        type: String,
        required: [true, 'Please enter parent name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter parent email'],
        lowercase: true,
        unique: true,
        validate: [emailValidate, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length should be 6 characters'],
    },
},
    { timestammp: true }
);

parentSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

parentSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}


const Parent = mongoose.model('parent', parentSchema);

module.exports = Parent;