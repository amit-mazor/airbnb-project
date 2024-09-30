const express = require('express')
const customers = require('./server/routes/customers')
const hosts = require('./server/routes/hosts')
const apartments = require('./server/routes/apartments')

const server = express()

server.use(express.static('public'))

server.use(express.json());

server.use('/', customers);
server.use('/', hosts);
server.use('/', apartments);


server.listen(8080)