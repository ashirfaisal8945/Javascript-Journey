// Faulty Calculator

// Write a program that takes two numbers and an operator as input and performs the corresponding calculation. However, the calculator is faulty and gives incorrect results for certain operations. The program should handle these cases and provide the correct output.


function faulty(a, b){
  let c = prompt("Enter the operator (+, -, *, /):");
  if (c === "+") {
    console.log(a-b)
}
else if (c === "*") {
    console.log(a+b)
}
else if (c === "-") {
    console.log(a/b)
}
else if (c === "/") {
    console.log(a**b)
}
else {    console.log("Invalid operator");
}
}
let num1 = (prompt("Enter the first number:"))
let num2 = (prompt("Enter the second number:"))
faulty(num1, num2)