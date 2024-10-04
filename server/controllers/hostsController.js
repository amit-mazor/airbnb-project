// server/controllers/hosts.js
const Host = require('../models/hosts'); // Import the Host model

// Get all hosts from MongoDB
async function getAllHosts(req, res) {
  try {
    const allHosts = await Host.find({});
    res.json(allHosts);
  } catch (err) {
    console.error('Failed to retrieve hosts:', err);
    res.status(500).send('Failed to retrieve hosts.');
  }
}

// Get a host by ID
async function getHost(req, res) {
  try {
    const hostId = req.query.id;
    const host = await Host.findOne({ id: hostId });
    if (host) {
      res.json(host);
    } else {
      res.status(404).send('Host not found');
    }
  } catch (err) {
    console.error('Failed to retrieve host:', err);
    res.status(500).send('Failed to retrieve host.');
  }
}

// Create a new host
async function createHost(req, res) {
  try {
    const { id, name, phone, country, ownApartments } = req.body;
    const newHost = new Host({ id, name, phone, country, ownApartments });
    await newHost.save();
    res.status(201).json(newHost);
  } catch (err) {
    console.error('Failed to create host:', err);
    res.status(500).send('Failed to create host.');
  }
}

// Delete a host by ID
async function deleteHost(req, res) {
  try {
    const hostId = req.query.id;
    const result = await Host.deleteOne({ id: hostId });
    if (result.deletedCount) {
      res.status(200).send(`Host with ID ${hostId} deleted successfully.`);
    } else {
      res.status(404).send('Host not found');
    }
  } catch (err) {
    console.error('Failed to delete host:', err);
    res.status(500).send('Failed to delete host.');
  }
}

module.exports = {
  getAllHosts,
  getHost,
  createHost,
  deleteHost,
};
