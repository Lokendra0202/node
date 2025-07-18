
const  EventEmitter  = require('events');
const emitter = new EventEmitter();

emitter.on('greetUser', (username) => {
  const hour = new Date().getHours();
  let greeting = 'Hello';
  if (hour < 12) 
    greeting = 'Good morning';
  
  else if (hour < 18) 
    greeting = 'Good afternoon';
   
  else 
    greeting = 'Good evening';
  console.log(`${greeting}, ${username}!`);
});

emitter.emit('greetUser', 'Alice');