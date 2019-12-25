//3. Write a function digitsum that calculates the digit sum of an integer. The digit sum of an integer is the sum of all its digits. 
//E.g. digitsum(192) should return 12.


let value = 192;
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum); //Convert the number to string, split the string and get an array with all digits and perform a reduce for every part and return the sum.

