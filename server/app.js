const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./Routers/authRoutes');
const userRoutes = require('./Routers/userRoutes');
const cors = require('cors'); // Import cors

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
