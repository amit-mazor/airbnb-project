const express = require('express')
const connectDB = require('./db'); // Import the MongoDB connection function

const path = require('path');


const routes = require('./server/routes/router.js')
const server = express();

// Connect to MongoDB Atlas
connectDB()

server.set('view engine', 'ejs');

server.set('views', path.join(__dirname,'server', 'views'));

server.use(express.static('public'))

server.use(express.json())


server.use('/', routes)

server.listen(8080)


