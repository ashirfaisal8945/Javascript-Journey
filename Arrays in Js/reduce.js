// Reduce:

// Used for operations such as you want single value as an output such as sum, product, maximum, minimum, etc. 



// To find the largest value in an array:

let basic_array = [ 2, 4, 8, 6, 3]
let largest_value = basic_array.reduce((previous, next) => {

  return previous > next ? previous : next;


})
console.log(largest_value)