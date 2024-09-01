// controllers/contactController.js

const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Message received, we will get back to you shortly.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit the contact form.' });
    }
};

module.exports = { submitContactForm };
