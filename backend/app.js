const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // Enable CORS for all routes


app.get('/', (req, res) => {
  res.send('Hello World!');
});



module.exports = app;// Start the server