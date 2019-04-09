'use strict'
var express = require('express');
var bodyParser = require('body-parser');

// Routes
var labRoutes = require('./routes/lab');
var employeeRoutes = require('./routes/employee');
var entriesRoutes = require('./routes/bitacoraentry');

var cors = require('cors');

//var app = express(cors());
// var app = express(cors({
// 	origin: 'http://localhost'
// }));

var app = express();

// Config body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Config HTTP Headers

// CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Request-Method, access-control-allow-headers');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

app.use('/api', labRoutes);
app.use('/api', employeeRoutes);
app.use('/api', entriesRoutes);

module.exports = app;
