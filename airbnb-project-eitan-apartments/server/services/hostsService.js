// Hosts Service - handles all Host-related business logic, including creating, updating, 
// listing, searching, and deleting hosts, interacting with the Host model and database.

const Host = require('../models/hosts');

// Create a new host
exports.createHost = async (hostData) => {
    const { name, email, phoneNumber, properties } = hostData;
    try {
        const newHost = new Host({ name, email, phoneNumber, properties });
        const savedHost = await newHost.save();
        return savedHost;
    } catch (error) {
        throw new Error(error.message);
    }
};

// List all hosts
exports.listHosts = async () => {
    try {
        const hosts = await Host.find().populate('properties');
        return hosts;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Search for hosts based on query parameters
exports.searchHosts = async (query) => {
    try {
        const hosts = await Host.find(query).populate('properties');
        return hosts;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a host by ID
exports.updateHost = async (id, updateData) => {
    try {
        const updatedHost = await Host.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!updatedHost) {
            throw new Error('Host not found');
        }
        return updatedHost;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a host by ID
exports.deleteHost = async (id) => {
    try {
        const deletedHost = await Host.findByIdAndDelete(id);
        if (!deletedHost) {
            throw new Error('Host not found');
        }
        return deletedHost;
    } catch (error) {
        throw new Error(error.message);
    }
};
