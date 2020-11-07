const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vaccineSchema = Schema({
    name: {
        type: String,
        required: true
    },
    whenToGive: {
        type: String,
        required:true,
    },
    administeredOn: {
        type: Date,
        default:null
    },
    dueDate: {
        type: Date,
        default: null,
    },
    child: {
        type: Schema.Types.ObjectId,
        required: true,
    }
},
    { timestamps: true }
);

const Vaccine = mongoose.model('vaccine', vaccineSchema);

module.exports = Vaccine;

