const express = require('express');
const { handleTextQuery, handleImageQuery } = require('../controllers/chatbotController');

const router = express.Router();

// Route for handling text-based queries
router.post('/text', handleTextQuery);

// Route for handling image-based queries
// router.post('/image', handleImageQuery);

module.exports = router;
