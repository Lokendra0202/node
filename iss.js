const isPrime = require('./Isprime.js');

const n = 29;

if (!isPrime(n)) {
    console.log("The number " + n + " is NOT a prime number.");
}
else {
    console.log("The number " + n + " is a prime number.");
}   
