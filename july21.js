const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('addName',(name) => {
    fs.appendFile('names.txt', `${name}\n`, (err) => {
        if (err) throw err;
        console.log(`Name ${name} added to names.txt`);
    });
});
emitter.emit('addName', 'LOkendra');
emitter.emit('addName', 'Suresh');
emitter.emit('addName', 'Ramesh');  
