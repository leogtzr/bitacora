'use strict'

// Model(s)
var Lab = require('../models/lab');

const apiMsg = 'Server Error.';


// Creates lab
function createLab(req, res){
    var lab = new Lab();
    var params = req.body;

    console.log('Grade: ' + req.user.grade);
    if (req.user.grade) {
        // return res.status(403).send({message:"Acceso denegado."});
    }

    if (!params.description) {
        params.description = null;
    }
    lab.name = params.name;
    lab.description = params.description;

    if(lab.name){
        Lab.findOne({name:lab.name}, (err, found)=>{
            if(err){
                res.status(500).send({message:apiMsg});
            }else{
                if(found){
                    res.status(400).send({message:"Laboratorio ya ha sido creado."});
                }else{
                    lab.save((err, newLab)=>{
                        if(err){
                            res.status(500).send({message:apiMsg});
                        }else{
                            if(!newLab){
                                res.status(404).send({message:"Error al crear laboratorio."});
                            }else{
                                res.status(200).send(newLab);
                            }
                        }
                    });
                }
            }
        });
    }else{
        res.status(400).send({message:"Inserte todos los campos."});
    }

}

// Updates lab
function updateLab(req, res){
    var labId = req.params.id;
    var lab = req.body;

    if(req.user.grade){
        return res.status(403).send({message:"Acceso denegado."});
    }

    Lab.findOne({name:lab.name}, (err, found)=>{
        if(err){
            res.status(500).send({message:apiMsg});
        }else{
            if(found){
                res.status(400).send({message:"Laboratorio ya ha sido creado."});
            }
        }
    });

    Lab.findByIdAndUpdate(labId, lab, (err, updated)=>{
        if(err){
            res.status(500).send({message:apiMsg});
        }else{
            if(!updated){
                res.status(404).send({message:"Error al actualizar laboratorio."});
            }else{
                res.status(200).send(updated);
            }
        }
    });

}

// Deletes lab
function deleteLab(req, res){
    var labId = req.params.id;

    if(req.user.grade){
        return res.status(403).send({message:"Acceso denegado."});
    }

    Lab.findByIdAndRemove(labId, (err, delLab)=>{
        if(err){
            res.status(500).send({message:apiMsg});
        }else{
            if(!delLab){
                res.status(404).send({message:"Error al eliminar."});
            }else{
                res.status(200).send(delLab);
            }
        }
    });
}

// Get all labs populating course->teacher objects
function getLabs(req, res){
    var find = Lab.find();

    find
	/*
	.populate({
        path: 'course',
        populate: {
            path: 'teacher',
            model: 'Teacher'
        }
    })
	*/
    .exec((err, labs)=>{
        if(err){
            res.status(500).send({message:apiMsg});
        }else{
            if(!labs){
                res.status(404).send({message:"No hay laboratorios."});
            }else{
                res.status(200).send(labs);
            }
        }
    });
}

// Get lab
function getLab(req, res){
    var labId = req.params.id;

    Lab.findById(labId, (err, lab)=>{
        if(err){
            res.status(500).send({message:apiMsg});
        }else{
            if(!lab){
                res.status(404).send({message:"Laboratorio inexistente."})
            }else{
                res.status(200).send(lab);
            }
        }
    })

}

function hello(req, res) {
    res.status(200).send('Hello');
}

module.exports = {
    createLab,
    updateLab,
    deleteLab,
    getLabs,
    getLab
};
