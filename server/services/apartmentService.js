// services/apartmentService.js
const Apartment = require('../models/apartment');
const mongoose = require('mongoose');

const getAll = async (query) => {
  const filter = {};
  if(query){
    const { city, price, guests } = query;
    if (city) filter['location.city'] = city;
    if (price) filter.price = { $lte: price };
    if (guests) filter.maxGuests = { $gte: guests };
  } 
  return Apartment.find(filter);
};

const getApartmentById = async (id) => {
  return Apartment.findById(id); 
}

const create = async (data) => {
  const newApartment = new Apartment(data);
  return newApartment.save();
};

const update = async (id, data) => {
  return Apartment.findByIdAndUpdate(id, data, { new: true });
};

const deleteApartment = async (id) => {
  return Apartment.findByIdAndDelete(id);
};

const getApartmentByHost = async (userId) => {
  return await Apartment.find({ host: new mongoose.Types.ObjectId(userId) }).exec();
}


module.exports = {
  getAll,
  getApartmentById,
  create,
  update,
  delete: deleteApartment,
  getApartmentByHost
};
