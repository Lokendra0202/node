var fs = require('fs');
var data = "A solution of all Technology";

var WriterStream = fs.createWriteStream('output.txt');
WriterStream.write(data, 'UTF8');   
WriterStream.end();
WriterStream.on('finish', function() {
    console.log("Write completed.");
});
WriterStream.on('error', function(err) {
    console.log(err.stack);
});
console.log("Program Ended.");