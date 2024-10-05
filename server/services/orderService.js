// services/orderService.js
const Order = require('../models/order');

const getAll = async (user) => {
  const filter = user ? { user } : {};
  return Order.find(filter).populate('user apartment');
};

// Get all historical orders from OrderHistory collection
const getOrderHistory = async () => {
  return OrderHistory.find().populate('user apartment');
};

const create = async (data) => {
  const newOrder = new Order(data);
  return newOrder.save();
};

const update = async (id, data) => {
  return Order.findByIdAndUpdate(id, data, { new: true }).populate('user apartment');
};

const deleteOrder = async (id) => {
  return Order.findByIdAndDelete(id);
};


const markOrderAsHistory = async (orderId) => {
  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { isHistory: true, status: 'completed' },
      { new: true }
    );
    return order;
  } catch (err) {
    throw new Error('Could not update order to history');
  }
};

module.exports = {
  getAll,
  getOrderHistory,
  create,
  update,
  delete: deleteOrder,
  markOrderAsHistory
};
