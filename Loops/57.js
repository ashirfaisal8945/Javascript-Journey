//for loop:

let a = 2

for (let i = 2; i < 5; i++) {
    console.log(a+i)
}

//--------------------------------------------------
//for in loop is used to iterate over the properties of an object. It allows you to access both the keys and values of the object. Used just in objects, not in arrays.

//for in loop:

const student = {
  name: "Ali",
  age: 20,
  grade: "A"
}

for (let key in student) {
  console.log(key, ":", student[key])
} 
// key will be name, age, grade and student[key] will be Ali, 20, A respectively.

// student[key] is used to access the value of the property in the student object using the key variable.

//student.name is used to access the value of the name property directly. It will return "Ali".

let car ={
    brand: "Toyota",
    model: "aqua",
    year: 2022
}

for (let key in car){
  console.log(key, ":", car[key])
}
//------------------------------------------------------

//for of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It allows you to access the values of the iterable directly without needing to use an index or key.

//for of loop:

for (let value of [10, 20, 30]) {
  console.log(value)
}

//------OR------

for (let char of "Ashir") {
  console.log(char)
}

//------------------------------------------------------


//while loop is used to execute a block of code repeatedly as long as a specified condition is true. It checks the condition before executing the code block, and if the condition is false, it exits the loop.

// while loop:

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

//-----OR------

let j = 1
while (j<5){
  console.log("Ashir")
  j++
}
//----------------------------------------------------

// do while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false. The condition is checked after the code block is executed.

// do while loop:

let x = 0
do{
  console.log(x)
  x++
} while (x < 5)

//------OR-------

let y = 10
do{
  console.log(y)
  y++
  } while(y>15)  // This will print 10 once, and then exit the loop because the condition y > 15 is false.
