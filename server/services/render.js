const axios = require('axios');

exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/animals')
    .then(function(response){
        res.render('index', {animals: response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.add_animal = (req,res) =>{
    res.render('add_animal');
}

exports.update_animal = (req,res) =>{
    axios.get('http://localhost:3000/api/animals',{params: {id: req.query.id}})
    .then(function(animaldata){
        res.render("update_animal", {animal: animaldata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}