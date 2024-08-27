// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const errorHandler = require('./middleware/error'); // Custom error handler
// const userRoutes = require('./Routers/userRoutes'); // Import user routes

// const app = express();

// // Middleware for parsing JSON and urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Cookie parser
// app.use(cookieParser());

// // CORS setup
// app.use(cors({
//     origin: process.env.CLIENT_URL, // Ensure CLIENT_URL is defined in your config.env file
//     credentials: true
// }));

// // Mount routers
// app.use('/api/v1/users', userRoutes); // User routes

// // Custom error handling middleware
// app.use(errorHandler);

// module.exports = app;




const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./Routers/userRoutes'); // Import user routes

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

// CORS setup
app.use(cors({
    origin: process.env.CLIENT_URL, // Ensure CLIENT_URL is defined in your config.env file
    credentials: true
}));

// Mount user routes
app.use('/api/v1/users', userRoutes);

module.exports = app;
