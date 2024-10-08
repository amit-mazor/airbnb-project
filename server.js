// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))
// Import route files
const userRoutes = require('./server/routes/userRoutes');
const apartmentRoutes = require('./server/routes/apartmentRoutes');
const orderRoutes = require('./server/routes/orderRoutes');
const reviewRoutes = require('./server/routes/reviewRoutes');
const authRoutes = require('./server/routes/authRoutes');  // Import auth routes
const mainRoutes = require('./server/routes/mainRoutes');  // Import auth routes

// Use the imported route files
app.use('/api/users', userRoutes);
app.use('/api/apartments', apartmentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/auth', authRoutes);  // Use auth routes
app.use('/', mainRoutes);  // Use auth routes
app.set("view engine","ejs");
app.set("views","server/views");

// Connect to MongoDB using the URI from .env file
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/airbnb';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('MongoDB connection error:', err));

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Airbnb Project API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
