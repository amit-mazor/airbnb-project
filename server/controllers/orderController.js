// controllers/orderController.js

const Order = require('../models/order'); // Ensure Order model is imported
const orderService = require('../services/orderService');

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAll(req.query.user);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { apartment, checkIn, checkOut, guests, apartmentPrice } = req.body;
    if(!req.session.user) {
      res.redirect('/login')
    } else {   
          // Automatically associate the order with the logged-in user's ID

          const newOrder = await orderService.create({
            user: req.session.user._id,  // Set the user to the logged-in user's ID
            apartment: apartment,
            checkIn,
            checkOut,
            guests,
            totalPrice: (new Date(checkOut)-new Date(checkIn)) / (1000 * 60 * 60 * 24)* Number(apartmentPrice)
          });
      
          res.status(201).redirect('/orders');

    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await orderService.update(req.params.id, req.body);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await orderService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// New function to get all orders for the logged-in user
const getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    // Retrieve all orders associated with the logged-in user
    const orders = await Order.find({ user: userId }).sort({ checkIn: 1 });
    res.status(200).redirect(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user orders: ' + error.message });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  getUserOrders,  // Export the new function
  updateOrder,
  deleteOrder
};
