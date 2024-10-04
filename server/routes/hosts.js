const express = require('express');
const router = express.Router();
const hostsController = require('../controllers/hostsController.js');

router.route("/hosts").get(hostsController.getAllHosts);
router.route("/host").get(hostsController.getHost);
router.route("/createHost").post(hostsController.createHost);
router.route("/deleteHost").post(hostsController.deleteHost);

module.exports = router;
