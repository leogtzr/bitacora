'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 8083;
// var server = require('http').Server(app);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/bitacora', { useNewUrlParser: true }, (err, res) => {
    if (err) {
        console.log("Server error.");
    } else {
        console.log("Connected to DB server.");
        app.listen(port, function() {
            console.log("API REST listening on " + port);
        });
    }
});
