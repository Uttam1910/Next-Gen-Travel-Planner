const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth'); // Assuming you have a middleware to protect routes
const router = express.Router();

// @route   POST /api/v1/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/v1/users/login
// @desc    Login user
// @access  Public
router.post('/login', loginUser);

// @route   GET /api/v1/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', protect, getUserProfile);

module.exports = router;
