var fs = require('fs')
var path = require('path')

module.exports = function (folder,extn,callback2) {
        var ext='.'+extn
        var list;
        fs.readdir(folder, function (err, files) {
        if (err) callback2(err)
        else{
            var listf = [];
            files.forEach(function(file) {
                if (path.extname(file) === ext) {
                   
                    //console.log(file)
                    listf.push(file)
                   
                   
                    
                }
            })
            
            callback2(null,listf)
        }
        })
    };