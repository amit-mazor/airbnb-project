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
const getPriceRangeCount = async () => {
  try {
    const priceRanges = await Apartment.aggregate([
      {
        $match: { price: { $gte: 200, $lte: 1000 } } // Filter for apartments within the $200-$1000 range
      },
      {
        $bucket: {
          groupBy: "$price",
          boundaries: [200, 300, 400, 500, 600, 700, 800, 900, 1000], // Define boundaries for the ranges
          default: "1000+", // Apartments above 1000 will be grouped here if they exist
          output: {
            count: { $sum: 1 }
          }
        }
      }
    ]);
    return priceRanges;
  } catch (error) {
    throw new Error('Error while fetching price range data');
  }
};
module.exports = {
  getAll,
  getApartmentById,
  create,
  update,
  delete: deleteApartment,
  getApartmentByHost,
  getListingsCountByCity,
  getPriceRangeCount
};
