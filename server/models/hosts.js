const mongoose = require('mongoose');

// Define the schema for a Host (property owner)
const hostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    properties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    }]
});

// Create the model from the schema
const Host = mongoose.model('Host', hostSchema);

module.exports = Host;
