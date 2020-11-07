const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please enter Child Name']
    },
    parentId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    DOB: {
        type: Date,
        default: Date.now(),
        required: [true, 'Please enter Date Of Birth']
    },
    gender: {
        type: String,
        required: [true, 'Please select Child Gender']
    }
});

const Child = mongoose.model('child', childSchema);

module.exports = Child;