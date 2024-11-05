// server/controllers/authController.js

const { registerUser, loginUser } = require('../services/authService');
const { validationResult } = require('express-validator');

// Controller for user registration
const signUp = async (req, res) => {
  // Validate input data
  console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const token = await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for user login
const signIn = async (req, res) => {
  // Validate input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Get token and user details from loginUser function
    const { token, user } = await loginUser(email, password);
    
    // Send existing user data along with the token
    res.status(200).json({
      message: 'User logged in successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token  // Add token below existing user data
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { signUp, signIn };
