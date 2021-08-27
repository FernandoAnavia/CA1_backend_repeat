const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    irishName: {
        type: String,
        require: true
    },
    animalClass: {
        type: String,
        require: true
    },
    animalOrder: {
        type: String,
        require: true
    },
    groupName: {
        type: String,
        require: true
    },
    iucn: {
        type: String,
        require: true
    },
    arrivalDate: {
        type: Date,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    status: String

})

const Animaldb = mongoose.model('animaldb', schema);

module.exports = Animaldb;