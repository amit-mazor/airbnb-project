// server/services/authService.js

const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (userData) => {
  const { username, email, password, firstName, lastName } = userData;

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    throw new Error('User already exists');
  }

  // Create a new user
  user = new User({ username, email, password, firstName, lastName });

  // Save the user to the database
  await user.save();

  return generateToken(user._id);
};

const loginUser = async (email, password) => {
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check if the password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  return generateToken(user._id);
};

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1h',  // Token expires in 1 hour
  });
};

module.exports = { registerUser, loginUser };
