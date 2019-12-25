//7. Write a function addElements to find the sum of the given elements in an array.
//E.g. addElements([1, 2, 3, 4, 10]) should return 20

let addElements = [1, 2, 3, 4, 10];
let sumElements = 0;
for (i = 0; i<addElements.length; i++){
    sumElements+= addElements[i];
}
console.log(sumElements); 