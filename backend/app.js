const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
const cors = require('cors');
const express = require('express');
const app = express();
const connectDB = require('./db/db'); // Import the database connection function
const userRoutes = require('./routes/user.routes'); // Import user routes


app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

connectDB(); // Call the database connection function

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes); // Use user routes

module.exports = app;// Start the server