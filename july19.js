const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('greet', (username) => {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour >=5 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good afternoon';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }
    console.log(`${greeting}, ${username}!`);
});
const username= process.argv[2] || 'Guest';
myEmitter.emit('greet', username);