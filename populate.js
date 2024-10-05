// populate.js
const mongoose = require('mongoose');
const User = require('./models/user');
const Apartment = require('./models/apartment');
const Order = require('./models/order');
const Review = require('./models/review');

const mongoUri = 'mongodb+srv://eshelrony:AirbnbAdminPass123@cluster0.ijwbm.mongodb.net/airbnbDB?retryWrites=true&w=majority';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Create sample users
const createUsers = async () => {
  await User.create([
    { username: 'john_doe', email: 'john@example.com', password: '1234', firstName: 'John', lastName: 'Doe', isHost: true },
    { username: 'jane_doe', email: 'jane@example.com', password: '1234', firstName: 'Jane', lastName: 'Doe' }
  ]);
  console.log('Users created');
};

// Create sample apartments
const createApartments = async () => {
  const john = await User.findOne({ username: 'john_doe' });
  await Apartment.create([
    {
      title: 'Beautiful Beachfront Apartment',
      description: 'A lovely apartment with a sea view.',
      price: 150,
      host: john._id,
      image: 'image_url',
      availableFrom: new Date(),
      availableTo: new Date(),
      location: {
        address: '123 Beach Street',
        city: 'Miami',
        state: 'FL',
        country: 'USA',
        zip: '33101',
        coordinates: { lat: 25.7617, lng: -80.1918 }
      },
      maxGuests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 1,
      amenities: ['WiFi', 'Air Conditioning', 'Parking']
    }
  ]);
  console.log('Apartments created');
};

// Create sample orders
const createOrders = async () => {
  const john = await User.findOne({ username: 'john_doe' });
  const jane = await User.findOne({ username: 'jane_doe' });
  const apartment = await Apartment.findOne({ title: 'Beautiful Beachfront Apartment' });
  await Order.create({
    user: jane._id,
    apartment: apartment._id,
    checkIn: new Date(),
    checkOut: new Date(),
    guests: 2,
    totalPrice: 300,
    status: 'confirmed'
  });
  console.log('Orders created');
};

// Create sample reviews
const createReviews = async () => {
  const jane = await User.findOne({ username: 'jane_doe' });
  const apartment = await Apartment.findOne({ title: 'Beautiful Beachfront Apartment' });
  await Review.create({
    user: jane._id,
    apartment: apartment._id,
    rating: 5,
    comment: 'Fantastic place with a great view!'
  });
  console.log('Reviews created');
};

// Execute the functions
const populateDB = async () => {
  await createUsers();
  await createApartments();
  await createOrders();
  await createReviews();
  mongoose.connection.close();
};

populateDB();
