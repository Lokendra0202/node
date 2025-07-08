const fs = require('fs');
const bufferData = Buffer.from("Hello , this is binary data", "utf8");

fs.writeFile('newBinaryFile.bin', bufferData, (err) => {
    if (err){
        console.log(err);
        return;
    }
    console.log('Binary file written successfully');
});