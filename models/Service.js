const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Partner member must have a first name.'],
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
    rang: {
        type: Number,
        required: [true, 'Partner member must have a rang.'],
    }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;