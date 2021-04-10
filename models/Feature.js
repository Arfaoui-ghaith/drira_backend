const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Feature must have a title.'],
    },
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;