const mongoose = require('mongoose');

const volunteerSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    date: String,
    email: String,
    phone: Number,
    initiative: String,
}, { timestamps: true });

// Correct usage: mongoose.model, not mongoose.models
const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;