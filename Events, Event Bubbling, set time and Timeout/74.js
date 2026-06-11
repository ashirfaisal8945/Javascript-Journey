
let butt = document.querySelector("#myButton");

butt.addEventListener("click",()=>{
    console.log("Button Clicked") 
});

// We access the button through Js and than addEventListener into it. It has 2 parts one is the event and other is the function that we want to execute when the event occurs.




let butt2 = document.querySelector("#myButton2")

butt2.addEventListener("dblclick",()=>{

  document.querySelector("#myButton2").innerHTML = "Double Clicked"

  console.log("Button Clicked 2 times") 
});

// Here we access the button through Js and than addEventListener into it. In this case we are using double click event and when we double click the button it will change the text of the button to "Double Clicked" and also show "Button Clicked 2 times" in the console.

//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events this is the link to the documentation of events in JavaScript. You can find more events and their usage in this link.


// Event Bubbling:

// It works from the innermost element to the outermost element. For example, if we have a div inside another div and we click on the innermost div, the event will first trigger on the innermost div and then it will bubble up to the outer div.

document.querySelector(".Child").addEventListener("click",()=>{

  event.stopPropagation() // This will stop the event from bubbling up to the parent elements.
  alert("Child Clicked")
})

document.querySelector(".Parent").addEventListener("click",()=>{
  
  event.stopPropagation()
  alert("Parent Clicked")
})

document.querySelector(".GrandParent").addEventListener("click",()=>{
  event.stopPropagation()
  alert("GrandParent Clicked")
})


// Basically when we click on the child div, it will first trigger the click event on the child div and then it will bubble up to the parent div and then to the grandparent div. So we will see 3 alerts when we click on the child div. This is called event bubbling.

// But to stop the event bubbling we can use the stopPropagation() method. This method will stop the event from bubbling up to the parent elements.



// Set Interval:

setInterval(() => {
    let grandParent = document.querySelector(".GrandParent");

    if (grandParent.style.backgroundColor === "yellow") {
        grandParent.style.backgroundColor = "blue";
    } else {
        grandParent.style.backgroundColor = "yellow";
    }

    console.log("Colour toggled every 2 seconds...");
}, 1000);

// Set interval is a method that allows us to execute a function repeatedly after a certain interval of time. In this case, we are toggling the background color of the grandparent div between yellow and blue every 2 seconds. We are also logging a message in the console every time the color is toggled.




// Set Timeout:
setTimeout(() => {
  let parent = document.querySelector(".Parent");
  alert("Its time to change the color of the parent div");
  parent.style.backgroundColor = "orange";
    
}, 5000);



setTimeout(() => {
  let child = document.querySelector(".Child");
  alert("We are going to change the color of child div");
  child.style.backgroundColor = "black";
    
}, 10000);

// Set timeout is a method that allows us to execute a function after a certain amount of time has passed. In this case, we are showing an alert after 5 seconds and 10 seconds.



