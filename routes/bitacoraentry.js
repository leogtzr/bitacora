'use strict'
var express = require('express');
var api = express.Router();

var controller = require('../controllers/bitacoraentry');
var mdAuth = require('../middlewares/authenticated');

// CRUD Default
api.get('/entries', controller.getAll);
api.get('/entry/:id', controller.getEntry);

module.exports = api;
