//Maps in array:

// map() creates a new array by calling a provided function on every element in the calling array. It does not change the original array.

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(values => {  
  return values * 2;
});
console.log(newArr);

//-------------OR------------------


let arr2 = arr.map((val, index, array) =>{ // The first parameter is the value of the element, the second parameter is the index of the element and the third parameter is the array itself. You can name any parameter as you want, but the order of the parameters is important.
  console.log(index + ": " + val + ": " + array); 
  
  
  return val * 3;
})
 console.log(arr2)

 // The parameters will print insde the body of arrow function while, outside the ody of arrow function, it will print the new array created by map() method.