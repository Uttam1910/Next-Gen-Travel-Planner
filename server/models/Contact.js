// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,  // Removes any leading/trailing spaces
        minlength: 2, // Ensures a name has at least 2 characters
        maxlength: 100 // Sets a maximum length to prevent overly long names
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, // Converts email to lowercase
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Validates email format
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 10, // Ensures the message is meaningful by having a minimum length
    },
    date: {
        type: Date,
        default: Date.now // Automatically sets the date when the document is created
    }
});

module.exports = mongoose.model('Contact', contactSchema);
