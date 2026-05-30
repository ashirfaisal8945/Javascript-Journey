//Arrays:

let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); //1
console.log(arr[1]); //2  
console.log(arr[2]); //3
console.log(arr[3]); //4
console.log(arr[4]); //5

console.log(arr.length); //5


 arr[0] = 10;  // here we changed the value of 0th index
 console.log(arr); //[10, 2, 3, 4, 5]


 console.log(typeof(arr)) //object

 // Array Methods:

 //1. toString() method:

 // The toString() method converts an array to a string of (comma separated) array values.

 console.log(arr.toString()) //10,2,3,4,5


//2. Join() method:
// The join() method also converts an array to a string, but it allows you to specify a separator between the elements.

console.log(arr.join()) //10,2,3,4,5
console.log(arr.join("-")) //10-2-3-4-5
console.log(arr.join(" ")) //10 2 3 4 5

//3. pop() method:
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(arr.pop())
console.log(arr)

//4. push() method:
// The push() method adds new items to the end of an array, and returns the new length.

console.log(arr.push(7))
console.log(arr)

//5. shift() method:
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

console.log(arr.shift())
console.log(arr)

//6. unshift() method:
// The unshift() method adds new items to the beginning of an array, and returns the new length.

console.log(arr.unshift(20))
console.log(arr)


//7. Concat() method:
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3) //[1, 2, 3, 4, 5, 6] 

//-----------OR-----------------

let arr4 = [100, 200, 300];
let arr5 = [400, 500, 600];
let arr6 = [700, 800, 900];

let arr7 = arr4.concat(arr5, arr6);

console.log(arr7)


//8. splice() method:
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// The first number is the index at which to start changing the array, the second number is the number of elements to remove, and the third number are the elements to add to the array.

//Removing:

let arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 1); // here we are removing 1 element from index 2...2 is the index and 1 is the number of elements to be removed
console.log(arr8) //[1, 2, 4, 5]

//Adding:
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(2, 0, 10); // here we are adding 10 at index 2...2 is the index and 0 is the number of elements to be removed
console.log(arr9) //[1, 2, 10, 3, 4, 5]


//9. slice() method:
// It returns a copy of a portion of an array.

let arr10 = [1, 2, 3, 4, 5];
let arr11 = arr10.slice(2, 4); // here we are selecting elements from index 2 to 4 to print (4 not included)
console.log(arr11) //[3, 4]
console.log(arr10) //[1, 2, 3, 4, 5]

//10. Reverse() method:
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
let arr12 = [1, 2, 3, 4, 5];
arr12.reverse();
console.log(arr12) //[5, 4, 3, 2, 1]


