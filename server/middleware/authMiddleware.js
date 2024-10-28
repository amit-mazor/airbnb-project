// server/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to protect routes and authenticate users
const protect = async (req, res, next) => {
  let token;

  // Check for token in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token and attach to req.user
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error('Authorization error:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };