const mongoose = require('mongoose');

const uri = 'mongodb+srv://eshelrony:AirbnbAdminPass123.ijwbm.mongodb.net/airbnbDB?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas', err);
    process.exit(1);
  }
};

module.exports = connectDB;