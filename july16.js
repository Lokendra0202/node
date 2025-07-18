const EventEmitter = require('events');

var myEmitter = new EventEmitter();

var fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
    };

var fun2 = () => {
    console.log("SBUP");
};    
var fun3 = (num1,num2) => {
    var num3 = num1 + num2;
    console.log("Sum is: " + num3);
}

myEmitter.on('myEvent1', fun1);
myEmitter.on('myEvent1', fun2);
myEmitter.on('myEvent1', fun3);


myEmitter.emit('myEvent1', 'Event occurred');
myEmitter.emit('myEvent1');
myEmitter.emit('myEvent1', 10, 20);

console.log(myEmitter.listeners('myEvent1'));
console.log(myEmitter.listenerCount('myEvent1'));


// myEmitter.removeListener('myEvent', fun1);
myEmitter.prependListener('myEvent1', fun2);
console.log(myEmitter.listeners('myEvent1'));
