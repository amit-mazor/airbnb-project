// controllers/apartmentController.js
const apartmentService = require('../services/apartmentService');

const getAllApartments = async (req, res) => {
  try {
    const apartments = await apartmentService.getAll(req.query);
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

module.exports = {
  getAllApartments,
  createApartment,
  updateApartment,
  deleteApartment,
  getApartmentById
};
