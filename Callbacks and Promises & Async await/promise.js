function get_data(dataId, get_next_data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);

 resolve("Success"); // Promise complete

      if (get_next_data) {
        get_next_data();
      } else {
        console.log("no more data");
      }

     
    }, 5000);
  });
}
// isko jb direct call krte hain to pending return krta hai lekin aur jb varibale mai store krke call krte hain to promise complete return krta hai



const getPromise = ()=>{
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Access granted");
    // reject("No response"); 
  })
}

// let promise = getPromise();
// promise.catch((err)=>{
//   console.log("Promise not completed, reason:", err);
// }) // This is the syntax for handling rejected promises

let promise = getPromise();
promise.then((res)=>{
  console.log("Promise completed, reason:", res);
}) // This is the syntax for handling resolved promises




function asynFunc(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1")
      resolve("Data 1 resolved");
    }, 5000); 
  })
}
console.log("Fetching Data 1....");
let p1 = asynFunc();
p1.then((res)=>{
  console.log(res);
})