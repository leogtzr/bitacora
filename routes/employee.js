'use strict'
var express = require('express');
var api = express.Router();

var controller = require('../controllers/employee');
var mdAuth = require('../middlewares/authenticated');

// CRUD Default
api.get('/hello', controller.hello);

module.exports = api;
