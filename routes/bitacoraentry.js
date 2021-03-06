'use strict'
var express = require('express');
var api = express.Router();

var controller = require('../controllers/bitacoraentry');
var mdAuth = require('../middlewares/authenticated');

// CRUD Default
api.get('/entries', controller.getAll);
api.get('/entries/:id', controller.getEntriesByEmployee);
api.get('/entry/:id', controller.getEntry);
api.get('/entry', controller.addEntry);
api.delete('/entry/:id', controller.deleteEntry);

module.exports = api;
