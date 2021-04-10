const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Team member must have a first name.'],
        trim: true,
    },
    last_name: {
        type: String,
        required: [true, 'Team member must have a last name.'],
        trim: true,
    },
    title: {
        type: String,
        required: [true, 'Team member must have a title.'],
        trim: true,
    },
    image: {
        type: String,
        required: [true, 'Team member section must have a image.'],
    },
    rang: {
        type: Number,
        required: [true, 'Team member must have a rang.'],
    }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;