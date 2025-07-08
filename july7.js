const fs = require('fs');
const {homedir} = require('os');

const filename = 'MyNewFile.txt';
console.log("SBUP\n");

fs.writeFile(filename, 'This is the first line of the file.\n',function (err) {
    if(err) {
        throw err;

    }
    console.log('File written successfully.');

    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
           throw err;
        }
        console.log('File content:', data);

    });
});