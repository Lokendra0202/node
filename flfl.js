var fs = require('fs');
console.log ("Program Started for reading file");
fs.readdir("C:\\Users\\SBUP\\MCA2403138\\AS_code", function(err, files) {
    if (err) {
        return console.error("Error reading directory ",  err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});