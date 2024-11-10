// controllers/apartmentController.js
const apartmentService = require('../services/apartmentService');

const getAllApartments = async (req, res) => {
  console.log('Received query:', req.query); // Log the query to ensure it's being passed correctly
  try {
    const apartments = await apartmentService.getAll(req.query);
    console.log('Found apartments:', apartments); // Log the apartments found
    res.render('results', { apartments }); // Render the results.ejs view with the apartments data
  } catch (error) {
    console.error('Error fetching apartments:', error.message);
    res.status(500).render('results', { apartments: [], error: error.message });
  }
};

const getApartmentById = async (req, res) => {
  console.log(req)
  try {
    const apartments = await apartmentService.getApartmentById(req.params.id);
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createApartment = async (req, res) => {
  try {
    const newApartment = await apartmentService.create(req.body);
    res.status(201).json(newApartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateApartment = async (req, res) => {
  try {
    const updatedApartment = await apartmentService.update(req.params.id, req.body);
    res.status(200).json(updatedApartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteApartment = async (req, res) => {
  try {
    await apartmentService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getHostApartments = async (req, res) => {
  try {
    const hostApartments = await apartmentService.getApartmentByHost(req.params.username);
    res.status(200).json(hostApartments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchApartments = async (req, res) => {
  try {
    // Get the search query from the request
    const searchQuery = req.query.searchQuery || '';

    // Use the service layer to get apartments based on the search query
    const apartments = await apartmentService.getAll({ searchQuery });

    // Render the results.ejs view, passing the apartments data and setting error to null
    res.render('results', { apartments, error: null });
  } catch (err) {
    console.error('Error fetching apartments:', err.message);
    // Render the results.ejs view with an empty list of apartments and the error message
    res.status(500).render('results', { apartments: [], error: err.message });
  }
};

const getListingsByCity = async (req, res) => {
  try {
    const listingsByCity = await apartmentService.getListingsCountByCity();
    res.status(200).json(listingsByCity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getAllApartments,
  createApartment,
  updateApartment,
  deleteApartment,
  getApartmentById,
  getHostApartments,
  searchApartments,
  getListingsByCity
};
