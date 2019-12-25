//6. Write a function findElement to find a given element in an array. It should return the index position of the element in the array and null if there are no elements present. In the case of repetition, find the index of the first occurrence of the element.
//E.g. findElement(23, [1, 2, 3, 4, 5, 5, 23, 2, 33]) should return 6


let elements = [1, 2, 3, 4, 5, 5, 23, 2, 33, 23];
function isInArray(value){
    if (elements.indexOf(value) > -1){   
        console.log(elements.indexOf(value));
    }else { 
        console.log('there is no such element in the array');
    }  
}  
 console.log(isInArray(23)); //position of 23 in the array