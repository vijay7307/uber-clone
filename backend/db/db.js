const mongoose = require('mongoose');

function connectDB() {
  const dbURI = process.env.DB_CONNECT || 'mongodb://localhost:27017/mydatabase'; // Use environment variable or default URI

  mongoose.connect(dbURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
}

module.exports = connectDB;
