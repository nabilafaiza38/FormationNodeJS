var UserModel = require('../Models/UserModel');

var getAllUsers = (req, res) => {
    UserModel.find().then(data => {res.json(data)}).catch(err => res.json(err))
}
var AddUser = (req, res) => {
    var U = new UserModel({
        name: req.body.name,
        age: req.body.age,
        favoriteFoods: req.body.favoriteFoods
       
    })
    U.save().then((data) => res.json(data)).catch(err => res.json(err))
}
var UpdateUser = (req, res) => {UserModel.findById(req.params.id)
    .then(data => {
        data.favoriteFoods.push("hamburger")
        data.name=req.body.name
        data.age=req.body.age
        data.favoriteFoods=req.body.favoriteFoods
        data.save().then((data2) => res.json(data2)).catch(err2 => res.json(err2))
    }).catch(err => res.json(err))
}

var DeleteUser= (req, res) => {UserModel.findOneAndRemove({_id: req.params.id})
     .then((data2) => res.json(data2)).catch(err2 => res.json(err2))
     }

module.exports = {getAllUsers,AddUser,UpdateUser,DeleteUser}