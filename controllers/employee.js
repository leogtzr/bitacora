'use strict'

// Model(s)
var Lab = require('../models/lab');

// Misc
const apiMsg = 'Server Error.';

function hello(req, res) {
    res.status(200).send('Hello alrpvw');
}

module.exports = {
    hello
};
