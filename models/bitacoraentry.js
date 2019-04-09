'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BitacoraEntrySchema = Schema({
    when: Number,
    description: String,
    notes: [String]
});

module.exports = mongoose.model('BitacoraEntry', BitacoraEntrySchema);