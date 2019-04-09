'use strict'
var express = require('express');
var api = express.Router();

var controller = require('../controllers/bitacoraentry');
var mdAuth = require('../middlewares/authenticated');

// CRUD Default
api.get('/entries', controller.getAll);

module.exports = api;
