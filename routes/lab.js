'use strict'
var express = require('express');
var api = express.Router();

var controller = require('../controllers/lab');
var mdAuth = require('../middlewares/authenticated');

// CRUD Default
api.post('/lab', mdAuth.ensureAuth, controller.createLab);
api.put('/lab/:id', mdAuth.ensureAuth, controller.updateLab);
api.delete('/lab/:id', mdAuth.ensureAuth, controller.deleteLab);

api.get('/lab', mdAuth.ensureAuth, controller.getLabs);
api.get('/lab/:id', mdAuth.ensureAuth, controller.getLab);

module.exports = api;
