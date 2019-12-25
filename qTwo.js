
//2. Write a function factorial that calculates the factorial of a positive integer.  E.g. factorial(3) should return 6.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  console.log( factorial(3) ); // returns 6