const cal = require('./arithemtic.js');

let loki = cal.add(5, 3);
console.log("The sum of 5 and 3 is: " + loki);
loki = cal.subtract(5, 3);
console.log("The difference of 5 and 3 is: " + loki);       
loki = cal.multiply(5, 3);
console.log("The product of 5 and 3 is: " + loki);
loki = cal.divide(5, 3);
console.log("The quotient of 5 and 3 is: " + loki);
    