const express = require('express');
const router = express.Router()

const apartmentsController = require('../controllers/apartmentsController')

router.route("/apartments").get(apartmentsController.getAllApartments)
router.route("/apartment").get(apartmentsController.getApartment)
router.route("/deleteApartment").post(apartmentsController.deleteApartment)
router.route("/createApartment").post(apartmentsController.createApartment)

module.exports = router