// routes/apartmentRoutes.js

const express = require('express');
const router = express.Router();
const apartmentController = require('../controllers/apartmentController');

// Define routes for apartment CRUD operations and search
router.get('/', apartmentController.getAllApartments);            // GET /api/apartments - Get all apartments or search
router.post('/', apartmentController.createApartment);            // POST /api/apartments - Create a new apartment
router.put('/:id', apartmentController.updateApartment);          // PUT /api/apartments/:id - Update apartment by ID
router.delete('/:id', apartmentController.deleteApartment);       // DELETE /api/apartments/:id - Delete apartment by ID
router.get('/:username', apartmentController.getHostApartments);  // GET /api/apartments/:username - Get all apartments of a speicific host 

module.exports = router;
