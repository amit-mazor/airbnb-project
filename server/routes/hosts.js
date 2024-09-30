const express = require('express');
const router = express.Router()

const hostsController = require('../controllers/hosts')

router.route("/hosts").get(hostsController.getAllHosts)
router.route("/host").get(hostsController.getHost)
router.route("/deleteHost").post(hostsController.deleteHost)
router.route("/createHost").post(hostsController.createHost)

module.exports = router
