const hostsModel = require('../models/hosts')

// Get all hosts
function getAllHosts(req,res) {
  const allHosts = hostsModel.getAllHosts()
  res.send(allHosts)
}

// Get a host by ID
function getHost(req,res) {
  const hostId = req.query.id
  const host = hostsModel.getHost(hostId)
  if (host == undefined)
    res.status(404).send("host not found")
  else
    res.json(host);
}

// Delete a host by ID
function deleteHost(req,res) {
  const hostId = req.query.id
  const isDeleted = hostsModel.deleteHost(hostId); 
  if (isDeleted) {
    res.status(200).send(`Host with ID ${hostId} deleted successfully.`);
  } else {
    res.status(404).send("Host not found");
  }
}

// Create a new host
function createHost(req,res) {
  const { id, name, phone, country, ownApartments } = req.body; 
  const isCreated = hostsModel.newHost(id, name, phone, country, ownApartments);
  if (isCreated) {
    const newHost = { id, name, phone, country, ownApartments };
    res.status(201).json(newHost);
  } else {
    res.status(400).send("Invalid host data.");
  }
}

module.exports = {
  getAllHosts,
  getHost,
  deleteHost,
  createHost,
}
