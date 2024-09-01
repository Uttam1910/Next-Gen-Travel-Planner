const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./Routers/authRoutes');
const userRoutes = require('./Routers/userRoutes');
const contactRoutes = require('./Routers/contact'); // Import the contact routes

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes); // Add the contact routes

module.exports = app;
