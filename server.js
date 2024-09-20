const express = require('express');
const app = express();
require('custom-env').env(process.env.NODE_ENV,'./server/config')
const mainController = require('./server/controllers/mainController');

const session = require('express-session');
app.use(session({
    secret:'hfg',
    saveUninitialized:false,
    resave:false
}))
app.set("view engine","ejs");
app.set("views","server/views");
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/', require('./server/routes/router'));

app.listen(process.env.PORT, console.log('Server is running on port: ' + process.env.PORT));