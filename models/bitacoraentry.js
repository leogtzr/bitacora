'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BitacoraEntrySchema = Schema({
    description: String,
    date: Date,
    notes: [String]
});

module.exports = mongoose.model('BitacoraEntry', BitacoraEntrySchema);
