const express = require('express')
const customers = require('./server/routes/customers')

const server = express()

server.use(express.static('public'))

server.use(express.json());

server.use('/', customers);


server.listen(8080)