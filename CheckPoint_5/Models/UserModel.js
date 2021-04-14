var mongoose = require('mongoose');
var UserSchema= mongoose.Schema({
    name:{ type: String, required: true },
    age: Number,
    favoriteFoods:[String]
})

var UserSchema= new mongoose.model('Users',UserSchema)
module.exports= UserSchema