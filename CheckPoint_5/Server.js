
require ('dotenv').config( { path: './Config/.env' })
var express = require('express')
var app = express()

var router= express.Router();
var db = require('./Config/db') 
const bp = require('body-parser');
app.use(bp.json());

var UserRoute= require("./Routes/UserRoute")
UserRoute.init(router)
app.use(router)

app.listen(3000, () => { 
    console.log(`Example app listening at http://localhost:3000`)
})
