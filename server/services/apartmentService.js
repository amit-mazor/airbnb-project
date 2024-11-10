// services/apartmentService.js
const Apartment = require('../models/apartment');
const mongoose = require('mongoose');


const getAll = async (query) => {
  const filter = {};
  if (query && query.searchQuery) {
    const searchRegex = new RegExp(query.searchQuery, 'i'); // Create a case-insensitive regex
    filter.$or = [
      { 'location.city': searchRegex },
      { 'location.country': searchRegex },
      { name: searchRegex }
    ];
  }

  try {
    return await Apartment.find(filter);
  } catch (error) {
    console.error("Error fetching apartments:", error);
    throw new Error("Error fetching apartments.");
  }
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

const getListingsCountByCity = async () => {
  try {
    const listings = await Apartment.aggregate([
      { $group: { _id: "$location.city", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    return listings;
  } catch (error) {
    throw new Error('Error while fetching listings count by city');
  }
};
module.exports = {
  getAll,
  getApartmentById,
  create,
  update,
  delete: deleteApartment,
  getApartmentByHost,
  getListingsCountByCity
};
