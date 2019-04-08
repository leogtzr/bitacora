'use strict'

// Model(s)
var Employee = require('../models/employee');
var BitacoraEntry = require('../models/bitacoraentry');

var utils = require('../utils/utils');

// Misc
const apiMsg = 'Server Error.';

function hello(req, res) {
    res.status(200).send('Hello alrpvw');
}

function getAll(req, res) {
    Employee.find()
    .exec((err, employees) => {
        if (err) {
            res.status(500).send({message: apiMsg});
        } else {
            res.status(200).send(employees);
        }
    });
}

function addEmployee(req, res) {
    var employee = new Employee();
    var entry = new BitacoraEntry();
    var params = req.body;

    utils.printParams(req);

    employee.name = params.name;
    employee.nickname = params.nickname;
    
    entry.when = params.entry.when;
    entry.description = params.entry.description;
    entry.notes = params.entry.notes;
    employee.entries = entry;

    if (employee.name && employee.entry) {

        employee.save((err, newEmployee) => {
            if (err) {
                res.status(500).send({message: apiMsg + ' ' + err});
            } else {
                if (!newEmployee){
                    res.status(404).send({message: "Error creating employee"});
                } else {
                    res.status(200).send(newEmployee);
                }
            }
        });

    } else {
        res.status(400).send({message: 'Mising some fields ... '});
    }
}

module.exports = {
    hello,
    getAll,
    addEmployee
};
