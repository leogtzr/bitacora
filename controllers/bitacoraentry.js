'use strict'

// Model(s)
var BitacoraEntry = require('../models/bitacoraentry');

// Misc
const apiMsg = 'Server Error.';

function getAll(req, res) {
    BitacoraEntry.find()
    .exec((err, entries) => {
        if (err) {
            res.status(500).send({message: apiMsg});
        } else {
            res.status(200).send(entries);
        }
    });
}

module.exports = {
    getAll
};
