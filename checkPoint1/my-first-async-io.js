const fs = require('fs'); 
fs.readFile(process.argv[2], function(err, data) {

    var t= data.toString().split('\n');
    console.log(t.length-1);
     res.end();
});