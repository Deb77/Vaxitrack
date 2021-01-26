const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childSchema = Schema({
    name: {
        type: String,
        required: [true, "Please enter child's name"]
    },
    parentId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    DOB: {
        type: Date,
        required: [true, "Please enter child's date of birth"]
    },
    gender: {
        type: String,
        required: [true, "Please enter child's gender"]
    }
},
    { timestamps: true }
);

const Child = mongoose.model('child', childSchema);

module.exports = Child;