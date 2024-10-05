// server/routes/authRoutes.js

const express = require('express');
const { check } = require('express-validator');
const { signUp, signIn } = require('../controllers/authController');

const router = express.Router();

// Route for user registration (sign up)
router.post(
  '/signup',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
  ],
  signUp
);

// Route for user login (sign in)
router.post(
  '/signin',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  signIn
);

module.exports = router;
