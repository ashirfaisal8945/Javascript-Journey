//Filter:
// It creates new  array but uses condition to filter the elements of the array. It does not change the original array.


let _1stArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let filtered_Arr = _1stArr.filter((vall =>{
  return vall > 50;
}))
console.log(filtered_Arr)

//-------------OR------------------

let filtered_Arr2 = _1stArr.filter((vall, index, array) =>{
  console.log(index + ": " + vall + ": " + array);
  return vall > 50;
})
console.log(filtered_Arr2)