const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Musicalbum = new mongoose.Schema({
    albumname: {
        type: String,
        lowercase: true,
        min: 5,
        required: [true, "can't be blank"],

    },
    description: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "can't be blank"],

    },
    price: {
        type: Number,
        min: 100,
        max: 1000,
        required: [true, "can't be blank"]
    },
    release_date: {
        type: Date

    },
    type_of_music: {
        type: String,
        required: true
    },
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

Musicalbum.plugin(uniqueValidator);
const jukeboxMusicAlbum = mongoose.model("JukeBoxAlbum", Musicalbum);
module.exports = jukeboxMusicAlbum;