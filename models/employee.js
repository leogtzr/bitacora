'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = Schema({
    name: String,
    when: Number,
    notes: [String]
});

module.exports = mongoose.model('Employee', EmployeeSchema);