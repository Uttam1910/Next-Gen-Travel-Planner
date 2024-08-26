// Routers/userRoutes.js

const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Route to get logged-in user profile, protected route
router.get('/profile', protect, getUserProfile);

module.exports = router;
