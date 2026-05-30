let boxes = document.getElementsByClassName("box");
boxes[0].style.backgroundColor = "red";
boxes[1].style.backgroundColor = "blue";
boxes[2].style.backgroundColor = "green"; // it will select the first three elements with the class "box" and change their background color



document.getElementById("name").style.backgroundColor = "yellow"; // it will select the element with the id "name"



document.querySelector(".box").style.backgroundColor = "purple"; // it will select the first element with the class "box"


document.querySelector("#name").style.backgroundColor = "orange"; // it will select the element with the id "name"


document.querySelectorAll(".box").forEach( e => e.style.backgroundColor = "pink"); // it will select all elements with the class "box" and change their background color to pink

// In case of coloring all the elements with the class "box" we will use querySelectorAll and forEach loop to change the background color of all the elements with the class "box" to pink.


document.getElementsByTagName("div").style.backgroundColor = "cyan"; // it will select all the div elements and change their background color to cyan but it will not work because getElementsByTagName returns a HTMLCollection and we cannot apply style to a collection, we need to loop through the collection to apply the style to each element.