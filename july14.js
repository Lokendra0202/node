const fs = require('fs');

const readableStream  = fs.createReadStream('mcaDiv_b.txt', 'utf8');
const writableStream = fs.createWriteStream('dest.txt');

readableStream.pipe(writableStream);

readableStream.on('end', () => {
    console.log('File copied successfully.');
});