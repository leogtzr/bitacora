'use strict'

// Model(s)
var BitacoraEntry = require('../models/bitacoraentry');

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

function getEntry(req, res) {
    var id = req.params.id;

    if (id) {
        BitacoraEntry.findById(id, (err, entry) => {
            if (err) {
                res.status(500).send(apiMsg + ' ' + err);
            } else {
                if (entry) {
                    res.status(200).send(entry);
                } else {
                    res.status(500).send(apiMsg + ' entry not found');
                }
            }
        });
    } else {
        res.status(400).send({message: 'Mising id ...'});
    }
}

module.exports = {
    getAll,
    getEntry
};
