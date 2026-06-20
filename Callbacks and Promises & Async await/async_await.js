// Async await:

// The async function always returns a promise

// Await is always used inside the async function

function api(){
  return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      console.log("Weather data is here")
      resolve(200)
    }, 5000)
  })
}

async function get_weather_data(){
  await api();  //1
  await api();  //2
}

//----------------------------------------------

function get_data(dataID){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("dataId :", dataID)
      resolve("success")  
      reject("Data is not fetching") 
    },2000)
  })
}


async function get_data_ID() {
  await get_data(1);
  await get_data(2);
  await get_data(3);
  await get_data(4);
  console.log("All data fetched")

  
}




