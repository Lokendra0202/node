const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('mcaDiv_b.txt');
const writeStream = fs.createWriteStream('mcaB.gz');   
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream).on('finish', () => {
        console.log('File compressed successfully.');
        
       
            });
  