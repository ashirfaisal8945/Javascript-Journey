let o = {
  name: "Ashir",
  age: 20,
  city: "Karachi",
  country: "Pakistan",
  profession: "Web Developer"  
}
o.name = "Ashir Faisal";
console.log(o)

//object is combination of key and value pairs

//---------------------------------------------------

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)   
console.log(a**b)  // ** is used for exponentiation
console.log(a++)   // post increment
console.log(a)
console.log(++a)   // pre increment
console.log(a--)
console.log(a)
console.log(--a)
//------------------------------------------------------

// Ternary Operator (Smarter if-else statement)
let x = 2
let y = 3

let c = x > y? ("x is greater than y") : ("y is greater than x")
console.log(c)
//------------------------------------------------------

// else if ladder

let marks = prompt("Enter your marks: ")

if (marks>=90 && marks<=100)
  console.log("A+ grade")
else if (marks>=80 && marks<90)
  console.log("A")
else if (marks>=70 && marks<80)
  console.log("B grade")
else if (marks>=60 && marks<70)
  console.log("C grade")
else if (marks>=50 && marks<60)
  console.log("D grade")
else if (marks<50)
  console.log("Fail!!")
else
  console.log("Invalid marks entered!!")