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
    res.status(201).redirect('/login');
  } catch (error) {
    res.status(400).redirect('/error');
  }
};

// Controller for user login
const signIn = async (req, res) => {
  // Validate input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).redirect('/error')
  }

  const { email, password } = req.body;

  try {
    // Get token and user details from loginUser function
    const { token, user } = await loginUser(email, password);
    req.session.user=user;
    req.session.token=token;
    // Send existing user data along with the token
    res.status(200).redirect('/');
  } catch (error) {
    res.redirect('/error');
  }
};
const signOut = async (req,res)=> {
  req.session.user=null;
  req.session.token=null;
  res.status(200).redirect('/');
}

module.exports = { signUp, signIn, signOut };
