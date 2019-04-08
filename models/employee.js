'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = Schema({
    name: String,
    nickname: String,
    entries: [{type: Schema.ObjectId, ref: 'BitacoraEntry'}]
});

module.exports = mongoose.model('Employee', EmployeeSchema);