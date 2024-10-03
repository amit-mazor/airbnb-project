const express = require('express')
const connectDB = require('./db'); // Import the MongoDB connection function
const customers = require('./server/routes/customers')
const hosts = require('./server/routes/hosts')
const apartments = require('./server/routes/apartments')

const server = express();

// Connect to MongoDB Atlas
connectDB()

server.use(express.static('public'))

server.use(express.json())

server.use('/', customers)
server.use('/', hosts)
server.use('/', apartments)


server.listen(8080)