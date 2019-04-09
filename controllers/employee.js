'use strict'

// Model(s)
var Employee = require('../models/employee');
var BitacoraEntry = require('../models/bitacoraentry');

var utils = require('../utils/utils');

const apiMsg = 'Server Error.';

function getAll(req, res) {

    utils.printParams(req);
    // console.log(req.query);
    var searchParam = req.query.search;
    if (searchParam) {
        console.log('It does exist ... ');
        Employee.find({nickname: new RegExp('^' + searchParam + '.*', "i")})
        .exec((err, employees) => {
            if (err) {
                res.status(500).send({message: apiMsg});
            } else {
                res.status(200).send(employees);
            }
        });
    } else {
        console.log('Normal search ... ');
        Employee.find()
        .exec((err, employees) => {
            if (err) {
                res.status(500).send({message: apiMsg});
            } else {
                res.status(200).send(employees);
            }
        });
    }

    
}

function addEmployee(req, res) {
    var employee = new Employee();
    var entry = new BitacoraEntry();
    var params = req.body;

    utils.printParams(req);

    employee.name = params.name;
    employee.nickname = params.nickname;

    if (employee.name) {
        employee.save((err, newEmployee) => {
            if (err) {
                res.status(500).send({message: apiMsg + ' ' + err});
            } else {
                if (!newEmployee){
                    res.status(500).send({message: "Error creating employee"});
                } else {
                    res.status(200).send(newEmployee);
                }
            }
        });

    } else {
        res.status(400).send({message: 'Mising some fields ... '});
    }
}

function addEntryToEmployee(req, res) {

    var params = req.body;
    var entry = params.entry;

    utils.printParams(req);

    if (params.id) {
        Employee.findById(params.id, (err, employee) => {
            if (err) {
                res.status(500).send({message: apiMsg + ' ' + err});
            } else {

                if (employee) {
                    var entry = new BitacoraEntry();
                    entry.when = params.entry.when;
                    entry.description = params.entry.description;
                    entry.notes = params.entry.notes;

                    entry.save((err, savedEntry) => {
                        if (err) {
                            res.status(500).send({message: apiMsg + ' ' + err});
                        } else {
                            employee.entries.push(savedEntry);
                            employee.save((err, savedEmployee) => {
                                if (err) {
                                    res.status(500).send({message: apiMsg + ' ' + err});
                                } else {
                                    res.status(200).send(savedEmployee);
                                }
                            });

                        }
                    });
                } else {
                    res.status(500).send(apiMsg + ' ' + params.id + ' employee not found');
                }

            }
        });
    } else {
        res.status(400).send({message: 'Mising some fields ... '});
    }
}

function getEmployee(req, res) {
    var id = req.params.id;

    if (id) {
        Employee.findById(id, (err, employee) => {
            if (err) {
                res.status(500).send(apiMsg + ' ' + err);
            } else {
                if (employee) {
                    res.status(200).send(employee);
                } else {
                    res.status(500).send(apiMsg + ' ' + id + ' employee not found');
                }
            }
        });
    } else {
        res.status(400).send({message: 'Mising id ...'});
    }
}

module.exports = {
    getAll,
    getEmployee,
    addEmployee,
    addEntryToEmployee
};
