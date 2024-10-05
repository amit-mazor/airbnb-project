// services/apartmentService.js
const Apartment = require('../models/apartment');

const getAll = async (query) => {
  const { city, price, guests } = query;
  const filter = {};
  if (city) filter['location.city'] = city;
  if (price) filter.price = { $lte: price };
  if (guests) filter.maxGuests = { $gte: guests };
  return Apartment.find(filter);
};

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

module.exports = {
  getAll,
  create,
  update,
  delete: deleteApartment
};
