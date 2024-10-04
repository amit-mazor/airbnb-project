const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

router.route("/customers").get(customersController.getAllCustomers);
router.route("/customer").get(customersController.getCustomer);
router.route("/createCustomer").post(customersController.createCustomer);
router.route("/deleteCustomer").post(customersController.deleteCustomer);

module.exports = router;
