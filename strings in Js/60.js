// Strings in Js:

//1. Accessing characters:

let str = "Ashir"
console.log(str[0])  //A
console.log(str[1])  //s
console.log(str[2])  //h
console.log(str[3])  //i
console.log(str[4])  //r



//2. String length:
console.log(str.length)  //5



//3. Template literals:
let name = "Ashir"
let age = 20
console.log(`My name is ${name} and I am ${age} years old.`)  //My name is Ashir and I am 20 years old. 


//4. String methods:
let str1 = "Ashir"
console.log(str1.toUpperCase())  //ASHIR
console.log(str1.toLowerCase())  //ashir
console.log(str1.length)  //5



//5. String Slicing:
let str2 = "Ashir"
console.log(str2.slice(0, 3))  //Ash
console.log(str2.slice(1, 4)) //4 means 3rd index tak le jao but 4th index ko include mat karo

console.log(str2.replace("sh",89)) //A89ir
console.log(str2.replace("ir",12)) //Ash12


//6. String Concatenation:
//It can be done in two ways: using + operator or using concat() method.

let str3 = "Ashir"
let str4 = "Khan"
console.log(str3 + " " + str4)  //Ashir Khan         
console.log(str3.concat(" ", str4))  //Ashir Khan

//7. Finding Index of a character:
let str5 = "Ashir"
console.log(str5.indexOf("h"))  //2
console.log(str5.indexOf("z"))  //-1 (not found)


//9. StartsWith and EndsWith:
let str6 = "Ashir"
console.log(str6.startsWith("A"))  //true
console.log(str6.endsWith("r"))  //true


