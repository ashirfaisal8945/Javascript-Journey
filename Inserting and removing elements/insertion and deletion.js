let div = document.createElement('div');

div.setAttribute("class", "inserted by Ashir");

div.innerHTML = 'I have been inserted!';

document.querySelector(".container").append(div);

// Here we create a new div element, set its class to "inserted by Ashir", and give it some inner HTML content. Then we select the first element with the class "container" and append our new div to it, effectively inserting it into the DOM.

//1. append()--adds at the end of the element

//2. prepend()--adds at the beginning of the element

//3. before()--adds before the element (before parent)

//4. after()--adds after the element   (after parent)


document.querySelector(".inserted by Ashir").remove();

// This line selects the element with the class "inserted by Ashir" and removes it from the DOM.


document.querySelector(".container").classList

// This line selects the first element with the class "container" and accesses its classList property.


document.querySelector(".container").className

// This line selects the first element with the class "container" and accesses its className property, which returns a string of all the classes assigned to that element.


// Differences between classList and className:

// classList is a DOMTokenList object that provides methods to manipulate classes, while className is a string that represents the class attribute of an element.


document.querySelector(".container").classList.add("Bhai");

// This line selects the first element with the class "container" and adds the class "Bhai" to its class list using the add() method of classList.


document.querySelector(".container").classList.remove("Bhai");

// This line selects the first element with the class "container" and removes the class "Bhai" from its class list using the remove() method of classList.


document.querySelector(".container").classList.toggle("Bhai");

// This line selects the first element with the class "container" and toggles the class "Bhai" on its class list using the toggle() method of classList.

// Toggle will add the class if it is not present, and remove it if it is already present.

