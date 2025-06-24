const perfec = require('./isperfect.js');
const n = 2;

if (perfec.perfect(n)) {
  console.log("The number " + n + " is a perfect number.");
} else {
  console.log("The number " + n + " is NOT a perfect number.");
}
