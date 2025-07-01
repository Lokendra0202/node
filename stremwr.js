var fs = require('fs');
var data = "A solution of all Technology";

var WriterStream = fs.createWriteStream('output.txt');
WriterStream.write(data, 'UTF8');   
WriterStream.end();
WriterStream.on('finish', function() {
    console.log("Write completed.");
});