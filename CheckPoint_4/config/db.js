const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("YES")).catch(err => console.log(err))

var db = mongoose.connection

module.exports = db