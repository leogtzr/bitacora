'use strict'
var express = require('express');
var api = express.Router();

var controller = require('../controllers/employee');
var mdAuth = require('../middlewares/authenticated');

api.get('/employees', controller.getAll);
api.post('/employee', controller.addEmployee);
api.get('/employee/:id', controller.getEmployee);
api.post('/entrytoemp', controller.addEntryToEmployee);

module.exports = api;
