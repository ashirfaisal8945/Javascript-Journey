// -----------Callback function-----------------

// callback function is a function that is paased as an argument to another function

//e.g 1:

function greet(name, callback) {
  console.log("Hello"+ name)
  callback()
}

function say_bye(){
  console.log("Goodbye")
}

greet("Ashir", say_bye)




//e.g 2:

function order_pizza(callback){
  console.log("Lets order pizza")

  setTimeout(() => {
  console.log("Pizza is ready")
  callback()
},5000)
}



function eat_pizza() {
  console.log("We re eating pizza")
}

order_pizza(eat_pizza)

// here order_pizza is the main function and eat_pizza is the callback function that will be called after the pizza is ready and setTimeout is used to simulate the time taken to prepare the pizza.

// Iska use case hai k hum aik function k run honai k baad he doosra chlaa sakta hai. Jaise k hmai order_pizza function run honai k baad he eat_pizza function run karna hai.

// Callback aur simple set timeout mai difference:

function first_task(){
  setTimeout(() => {
    console.log("First task complete");
  }, 1000);
}

function second_task(){
  console.log("Second task complete");
}

first_task()
second_task()

//Pehlai second task run krega aur phir 1 secoond baad first task  run hoga


function first_task(callback){
  setTimeout(() => {
    console.log("First task complete");
    callback()
  }, 1000);
}

function second_task(){
  console.log("Second task complete");
}

first_task(second_task)

//Ab pehlai first task run hoga aur phir 1 secoond baad second task run hoga


// Agar hum callback function use nahi krte to humara code asynchronous hota hai aur humara code ka flow control nahi hota hai. Lekin agar hum callback function use krte hai to humara code synchronous hota hai aur humara code ka flow control hota hai.


//-----------Callback hell-----------------

// Callback hell is a situation where we have multiple nested callback functions. This can make our code difficult to read and maintain.


function get_data(dataId, get_next_data){
setTimeout(() =>{
  console.log("data", dataId)
  if(get_next_data){
    get_next_data()
  }
  else{
    console.log("no more data")
  }
}, 5000)}

get_data(1, ()=>{
  get_data(2, ()=>{
    get_data(3)
    })
  })

  //data 1 is shown after 5 seconds than after 5 seconds data 2 and than after 5 seconds data 3

  //Isko callback hell bhi keh skte hain kyon k humne multiple nested callback functions use kiye hain. 

  // Iska solution hai k hum callback function ko separate function mai likhe aur usko call kare. Jaise k:


function get_data(dataId, get_next_data){
setTimeout(() =>{
  console.log("data", dataId)
  get_next_data()
},5000)}

function next(){
  setTimeout(() => {
  console.log("the next id is 2")
},5000)
}

get_data(1, next)


// Kya callback aik function hai ya aik parameter?
//Socho tum apne dost ko ek note dete ho:

// Note ek parameter hai jo tumne uske haath mai diya.

// Lekin us note ke andar likha hai: “5 minute baad chai bana ke le aana.”

// Jab dost us note ko follow karta hai, wo function execute kar raha hota hai.


// zyada easy tarika hai k hum promise use kare. Jaise k:

// -----------------Promise-----------------

// A promise is a object in javascript that has 3 three states: pending, fulfilled and rejected.

// The 2 handlers are resolve and reject

let promise = new Promise((resolve, reject)=>{
  console.log("Hi i am a promise!!")

 resolve("Promise is resolved")

})



//e.g :








