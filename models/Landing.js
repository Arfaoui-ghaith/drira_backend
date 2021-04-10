const mongoose = require('mongoose');

const landingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Landing section must have a title.'],
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: [true, 'Landing section must have a image.'],
    },
    rang: {
        type: Number,
        required: [true, 'Partner member must have a rang.'],
    }
});

const Landing = mongoose.model('Landing', landingSchema);

module.exports = Landing;