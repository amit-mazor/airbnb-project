const express = require('express');
const router = express.Router()

const customersController = require('../controllers/customers')

router.route("/customers").get(customersController.getAllCustomers)
router.route("/customer").get(customersController.getCustomer)
router.route("/deleteCustomer").post(customersController.deleteCustomer)
router.route("/createCustomer").post(customersController.createCustomer)

module.exports = router