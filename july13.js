const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('mcaB.gz');
const writeStream = fs.createWriteStream('mca_decom.txt');
const gunzip = zlib.createGunzip();
readStream.pipe(gunzip).pipe(writeStream).on('finish', () => {
    console.log('File decompressed successfully.');
});