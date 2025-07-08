var fs = require("fs");
console.log("Going to read Directory /file");
fs.readdir("C:/Users/SBUP/MCA2403138/AS_code", function(err, files) { 
    if (err) {
        return console.error(err);}
    files.forEach(function (file) {
    fs.stat(file, function(err, file1) {
    if (err) {
        return console.error( err);
    }
    if(file1.isFile()) {
        console.log(file + " ---is a file.");
    }
    else{
        console.log(file + " ---is a directory.");

    }
});
});
});