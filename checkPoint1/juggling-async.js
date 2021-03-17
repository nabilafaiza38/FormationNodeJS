var http = require('http');
var length=0;
var S1="";
var S2="";
var S3="";
var cpt=0;
http.get(process.argv[2], (res) => {
    res.setEncoding('utf-8')
    res.on('data', function (data) {
        length+=data.length;
        S1+=data;

     })
     
     res.on('end', function () {
        cpt+=1;
 
      })
})
http.get(process.argv[3], (res) => {
    res.setEncoding('utf-8')
    res.on('data', function (data) {
        length+=data.length;
        S2+=data;

     })
     res.on('end', function () {
        cpt+=1;
 
      })
     
})
http.get(process.argv[4], (res) => {
    res.setEncoding('utf-8')
    res.on('data', function (data) {
        length+=data.length;
        S3+=data;

     })
     res.on('end', function () {
        cpt+=1;
 
      })
     
})
