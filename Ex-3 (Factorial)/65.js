// Write a program to cLculate the factorial of a number using reduce and for loop.


// Using reduce:

var give = [6,5,4,3,2,1];

var factorial = give.reduce((prev, next) =>{
  return prev * next;
})

console.log(`The factorial of 6 is ${factorial}`);



// Using for loop:

var num =6;
var factorial = 1;
for(var i = 1; i<=num; i++){
  factorial = factorial * i;

}
console.log(`The factorial of 6 is ${factorial}`);


