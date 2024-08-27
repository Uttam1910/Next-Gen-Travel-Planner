const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
// Load environment variables from .env file located in the server directory
dotenv.config(); 

// Connect to MongoDB
connectDB();

const app = require('./app');

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
