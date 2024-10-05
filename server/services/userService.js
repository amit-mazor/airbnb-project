// services/userService.js
const User = require('../models/user');

const getAll = async () => {
  return User.find();
};

const getUserById = async (userId) => {
  try {
    // Find the user by ID, excluding the password field
    const user = await User.findById(userId).select('-password');
    return user;
  } catch (error) {
    throw new Error('Error fetching user by ID: ' + error.message);
  }
};

const create = async (data) => {
  const newUser = new User(data);
  return newUser.save();
};

const update = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};

const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getUserById,
  create,
  update,
  delete: deleteUser
};
