var PersonModel = require('../Models/PersonModel');


var AddPerson = (req, res) => {
    var U = new PersonModel({
        name: req.body.name,
        age: req.body.age,
        favoriteFoods: req.body.favoriteFoods,
       
    })
    U.save().then((data) => res.json(data)).catch(err => res.json(err))
}
var AddPersons = (req, res) => {
    PersonModel.create(req.body).then((data) => res.json(data)).catch(err => res.json(err))
}
var getAllPersons = (req, res) => {
    PersonModel.find().then(data => {res.json(data)}).catch(err => res.json(err))
}
var getOneByFood = (req, res) => {PersonModel.findOne({ favoriteFoods:req.params.food })
    .then(data => {
        res.json(data)
    }).catch(err => res.json(err))
}
var getById = (req, res) => {PersonModel.findById(req.params.id)
    .then(data => {
        res.json(data)
    }).catch(err => res.json(err))
}
//Perform Classic Updates by Running Find, Edit, then Save
var AddBurger = (req, res) => {PersonModel.findById(req.params.id)
    .then(data => {
        data.favoriteFoods.push("hamburger")
        data.save().then((data2) => res.json(data2)).catch(err2 => res.json(err2))
    }).catch(err => res.json(err))
}
//Perform New Updates on a Document Using model.findOneAndUpdate()
var updatePersonAge= (req, res) => {PersonModel.findOneAndUpdate({name: req.params.name  }, {age: 20},
  {new: true, runValidators: true     })
    .then((data) => res.json(data)).catch(err => res.json(err))
}
var DeletePersonById= (req, res) => {PersonModel.findOneAndRemove({_id: req.params.id})
     .then((data2) => res.json(data2)).catch(err2 => res.json(err2))
     }
var DeletePersonByName= (req, res) => {PersonModel.deleteMany({name: req.params.name})
.then((data) => res.json(data)).catch(err => res.json(err))
}
//Chain Search Query Helpers to Narrow Search Results
var queryHelper= (req, res) => {PersonModel.find({ favoriteFoods:"burrito" })               
    .limit(2)                
    .sort({name: 1} )     
    .select({age: false}) 
    .exec()  
.then((data) => res.json(data)).catch(err => res.json(err))
}
module.exports = {
    getAllPersons,AddPerson,AddPersons,getOneByFood,getById,AddBurger,updatePersonAge,DeletePersonById
    ,DeletePersonByName,queryHelper}