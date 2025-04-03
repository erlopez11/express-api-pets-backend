const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: String,
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;