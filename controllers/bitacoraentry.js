'use strict'

// Model(s)
var BitacoraEntry = require('../models/bitacoraentry');

const apiMsg = 'Server Error.';

function getAll(req, res) {

    var searchParam = req.query.search;
    if (searchParam) {
        BitacoraEntry.find({description: new RegExp(searchParam + '.*', "i")})
        .exec((err, entries) => {
            if (err) {
                res.status(500).send({message: apiMsg});
            } else {
                res.status(200).send(entries);
            }
        });
    } else {
        BitacoraEntry.find()
        .exec((err, entries) => {
            if (err) {
                res.status(500).send({message: apiMsg});
            } else {
                res.status(200).send(entries);
            }
        });
    }
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

function deleteEntry(req, res) {
    var id = req.params.id;

    Employee.findByIdAndRemove(id, (err, removedEntry) => {
        if (err) {
            res.status(500).send({message: apiMsg + ' ' + err});
        } else {
            if (!removedEntry) {
                res.status(500).send({message: "Error removing entry "});
            } else {
                res.status(200).send(removedEntry);
            }
        }
    });
}

module.exports = {
    getAll,
    getEntry,
    deleteEntry
};
