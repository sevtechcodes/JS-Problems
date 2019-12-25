






 






//10. Write a function sort that sorts a given array into ascending order. You cannot use the inbuilt ’.sort’ JS function.
//E.g. sort([4, 2, 1, 5, 3]) should be [1, 2, 3, 4, 5]

function bubbleSort(array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    return array;
  }
  
  let numbers = [4, 2, 1, 5, 3];
  bubbleSort(numbers);
  console.log(numbers);
