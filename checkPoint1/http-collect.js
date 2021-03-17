var http = require('http');
var length=0;
var S="";
http.get(process.argv[2], (res) => {
    res.setEncoding('utf-8')
    res.on('data', function (data) {
        length+=data.length;
        S+=data;

     })
     res.on('end', function () {
       console.log(length+"\n"+S)

     })
     
})
/* 2eme methode possible
const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
   */ 