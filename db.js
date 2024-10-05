// db.js

const mongoose = require('mongoose');

// Use environment variables or fallback URI for MongoDB connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/airbnb';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.log('MongoDB connection error:', err);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;
