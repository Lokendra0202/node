const fs = require('fs');
fs.truncate('jullly9.txt', 10,(err) =>{
    if (err) {
        console.error('Error truncating file:', err);
    } else {
        console.log('File truncated successfully.');
    }
});