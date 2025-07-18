const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('login', (username) => {
    console.log(`User"${username}" has logged in.`);
});
myEmitter.on('logout', (username) => {
    console.log(`User "${username}" has logged out.`);
});

function login(username){
    console.log(`Attempting to log in user: ${username}`);
    myEmitter.emit('login', username);
}
function logout(username){
    console.log(`Attempting to log out user: ${username}`);
    myEmitter.emit('logout', username);
}

login(' || Lokendra ||');
logout('|| Lokendra ||');    
login(' || Loki     ||');
logout('|| Loki     ||');