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
    const token = await loginUser(email, password);
    req.session.user=email;
    res.redirect('/');
  } catch (error) {
    res.redirect('/error');
  }
};

module.exports = { signUp, signIn };
