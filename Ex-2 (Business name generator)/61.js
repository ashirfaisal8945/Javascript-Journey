//Create a business name generator by combining list of adjectives and shop name and another word.

//Adjectives:
// Crazy
// Amazing
// Fire

//Shop names:
// Engine
// Foods
// Garments


//Another word:
// Bros
// Limited
// Hub

//Output:
// Crazy Engine Bros
// Amazing Foods Limited
// Fire Garments Hub


let adj1 = "Crazy";
let adj2 = "Amazing";
let adj3 = "Fire";

let shop1 = "Engine";
let shop2 = "Foods";
let shop3 = "Garments";

let word1 = "Bros";
let word2 = "Limited";
let word3 = "Hub";


let random_number = Math.random()*3 + 1;
 // Generate a random number between 1 and 3. Basically Maths.random() gives us random number between 0 and 1. So we multiply it by 3 to get a number between 0 and 3.

let Cut_the_decimal = Math.floor(random_number);

console.log(Cut_the_decimal); 

if (Cut_the_decimal == 1) {

    console.log(adj1 + " " + shop1 + " " + word1);
}
 else if (Cut_the_decimal == 2) {

    console.log(adj2 + " " + shop2 + " " + word2);
} 
else if (Cut_the_decimal == 3) {

    console.log(adj3 + " " + shop3 + " " + word3);
      
} else {
    console.log("Invalid input. Please enter a number from 1 to 3.");
}