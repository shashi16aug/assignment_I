const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Musicians = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        min: 3,
        required: [true, "can't be blank"],

    },

    musician_type: {
        type: String,
        required: true
    },
}, { timestamps: true });

Musicians.plugin(uniqueValidator);
const jukeboxMusicians = mongoose.model("Musicians", Musicians);
module.exports = jukeboxMusicians;