const fs = require('fs');
const readableStream = fs.createReadStream('mcaDiv_b.txt', 'utf8');
readableStream.on('data', (chunk) => {
    console.log('New chunk received:');
    console.log(chunk);
});
readableStream.on('end', () => {
    console.log('No more data to read.');
});