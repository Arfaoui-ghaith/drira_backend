const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Partner member must have a first name.'],
        trim: true,
    },
    image: {
        type: String,
        required: [true, 'Partner section must have a image.'],
    },
    rang: {
        type: Number,
        required: [true, 'Partner member must have a rang.'],
    }
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;