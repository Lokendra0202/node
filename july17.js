const EventEmitter = require('events');

var myEmitter = new EventEmitter();

var table = function(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
  console.log("Table of " + n + " is printed");
};

var factorial = function(n) {
  if (n < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return;
  }
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  console.log(`Factorial of ${n} is ${fact}`);
};

myEmitter.on('myEvent3', table);
myEmitter.on('myEvent3', factorial);

myEmitter.emit('myEvent3', 5);
myEmitter.emit('myEvent3', 10);

myEmitter.emit('myEvent3', 5);
myEmitter.emit('myEvent3', 7);


myEmitter.removeAllListeners('myEvent3');
console.log(myEmitter.listeners('myEvent3'));
console.log(myEmitter.listenerCount('myEvent3'));
console.log(myEmitter.listeners('myEvent3'));
console.log(myEmitter.listenerCount('myEvent3'));
