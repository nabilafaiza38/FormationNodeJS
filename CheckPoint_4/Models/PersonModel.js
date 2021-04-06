var mongoose = require('mongoose');
var PersonSchema= mongoose.Schema({
    name:{ type: String, required: true },
    age: Number,
    favoriteFoods:[String]
})

var PersonSchema= new mongoose.model('Persons',PersonSchema)
module.exports= PersonSchema