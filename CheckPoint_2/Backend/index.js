var express = require('express')
var app = express()
const bp = require('body-parser');
var http = require('http');
var fs = require('fs');
function VerifyDate(){
    let date_ob= new Date()
    let hours = date_ob.getHours()
    let day=date_ob.getDay()
   if((day<6)&&(day>0)&&(hours<127)&&(hours>8)) return(true)
   else return(false)
}
app.all('/contact.html', function (req, res) {
    let access=VerifyDate(); 
        if(access==true){
            fs.readFile('../Frontend/contact.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else{
        res.sendStatus(404)
    }
    
    
});
app.all('/home.html', function (req, res) {
    let access=VerifyDate(); 
        if(access==true){
            fs.readFile('../Frontend/home.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        }else{
            res.sendStatus(404);
        }
    
});
app.all('/services.html', function (req, res) {
    let access=VerifyDate(); 
        if(access==true){
            fs.readFile('../Frontend/services.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data)
                return res.end()
            });
        }else{
            res.sendStatus(404)
        }
    
});  
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)    
})