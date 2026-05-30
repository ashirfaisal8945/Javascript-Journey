// Functions:

function intro(name) {
    console.log("Hey myself " +  name)
  
  }

intro("Ashir")
intro("Ayesha")
intro("Rayyan")

//--------OR----------

function sum(a, b) {
     console.log(a + b)
}
sum(5, 10)
//--------OR----------


function sum(a, b) {
    return a + b   // return is used to get the value of the function and store it in a variable. Can use the value outside the block of the function.
}

let result = sum(2,3)
console.log("The sum of two values are", result)

//---------------------------------------------------------

//Arrow functions:

let func = () => {
    console.log("This is an arrow function")
}
func()

//--------OR----------

let func2 = (x, y) => {
  return x * y
}
let result2 = func2(5, 10)
console.log("The product of two values are", result2) 
