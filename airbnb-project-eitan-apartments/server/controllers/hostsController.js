const hostService = require('../services/hostsService');

// Controller to create a new host
exports.createHost = async (req, res) => {
    try {
        const newHost = await hostService.createHost(req.body);
        res.status(201).json(newHost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to list all hosts
exports.listHosts = async (req, res) => {
    try {
        const hosts = await hostService.listHosts();
        res.status(200).json(hosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to search for hosts by name, email, or phone number
exports.searchHosts = async (req, res) => {
    const { name, email, phoneNumber } = req.query;
    const query = {};
    if (name) query.name = name;
    if (email) query.email = email;
    if (phoneNumber) query.phoneNumber = phoneNumber;

    try {
        const hosts = await hostService.searchHosts(query);
        res.status(200).json(hosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a host by ID
exports.updateHost = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedHost = await hostService.updateHost(id, req.body);
        res.status(200).json(updatedHost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to delete a host by ID
exports.deleteHost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedHost = await hostService.deleteHost(id);
        res.status(200).json({ message: 'Host deleted successfully', deletedHost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
