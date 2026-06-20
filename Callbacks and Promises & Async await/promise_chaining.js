// // -----------Promise Chaining-----------

// // It is the solution of call back hell as u want to fetch the data 1 by 1

//e.g 1:
// function asyncFunc1() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("Data 1")
//       resolve("Success")
//     }, 5000)
//   })

// }

// function asyncFunc2() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("Data 2")
//       resolve("Success")
//     }, 5000)
//   })

// }
// console.log("Fetching Data 1....")

// asyncFunc1().then((res)=>{

//   console.log(res)

//   console.log("Fetching Data 2....")

// asyncFunc2().then((res)=>{

//   console.log(res)

//   })
// })

//e.g 2:

function getData(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data', dataID);
      resolve('Success');
    }, 3000);
  });
}

// getData(1)
// .then((res)=>{
//   return getData(2)
// })
// .then((res)=>{
//   return getData(3)
// })
// .then((res)=>{
//   console.log("Success")
// })

// You can also do like this:
getData(1).then((res) => {
  console.log('Data 1 is taken');

  console.log('Fetching Data 2...');

  getData(2).then((res) => {
    console.log('Data 2 is taken');

    console.log('Fetching Data 3...');

    getData(3).then((res) => {
      console.log('Data 3 is taken');
      console.log('Success');
    });
  });
});
