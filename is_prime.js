const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

rl.question('Enter how many numbers you want to check: ', (countStr) => {
  let count = parseInt(countStr);
  let numbersChecked = 0;

  function askNumber() {
    if (numbersChecked >= count) {
      rl.close();
      return;
    }

    rl.question('Enter a number: ', (numStr) => {
      let num = parseInt(numStr);
      if (isPrime(num)) {
        console.log(num + ' is a prime number');
      } else {
        console.log(num + ' is not a prime number');
      }
      numbersChecked++;
      askNumber();
    });
  }

  askNumber();
});
