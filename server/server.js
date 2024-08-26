// server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the database connection function

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = require('./app'); // Import the app

const PORT = process.env.PORT || 5000;

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});
