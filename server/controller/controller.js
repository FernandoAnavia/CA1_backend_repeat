var Animaldb = require('../model/model');

// save and create new Animal

exports.create = (req,res) => {
    //validate req
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }
    //new animal
    const animal = new Animaldb ({
        name: req.body.name,
        irishName: req.body.irishName,
        animalClass: req.body.animalClass,
        animalOrder: req.body.animalOrder,
        groupName: req.body.groupName,
        iucn: req.body.iucn,
        arrivalDate: req.body.arrivalDate,
        description: req.body.description,
        status: req.body.status
    })

    //save animal

    animal
        .save(animal)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "An error occurred while creating new input"
            });
        });
}

//retrieve and return all animals

exports.find = (req,res) => {
    Animaldb.find()
    .then(animal =>{
        res.send(animal)
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Error while retriving animal info"})
    })
}

//retrieve and return a single animal

exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id;
        Animaldb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: "There is not animal with id" + id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "An error occurred when retrieving animal with id " + id})
        })
    }else{

    Animaldb.find()
    .then(animal =>{
        res.send(animal)
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Error while retriving animal info"})
    })
}
}


// Update a new Animal by ID

exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }
    const id = req.params.id;
    Animaldb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message: `Cannot update animal with ${id}. Animal was not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "Error with animal information"})
    })
}

// Delete an animal by ID

exports.delete = (req, res) => {
    const id = req.params.id;

    Animaldb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: `Cannot delete animal with id ${id}. Id might be wrong`})
        }else{
            res.send({
                message: "Animal was deleted succesfully"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete animal with id=" + id
        });
    });
}