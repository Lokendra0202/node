const fs = require('fs');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('fileRead', (data)=> {
    console.log(`File data received:`, data);
});

fs.readFile('sample.txt', 'utf8', (err, data) => {
   if (err) throw err;
   myEmitter.emit('fileRead', data);    
});

