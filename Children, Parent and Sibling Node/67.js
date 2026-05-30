console.log("Hello, World!");

document.body.firstElementChild.style.color = "red";


document.body.childNodes[1].childNodes// it will give you the text node of the first element of the body tag. It is because the first element of the body tag is a text node. So, it will give you the text node of the first element of the body tag. The free space is considered as a text node.

document.body.firstElementChild // it will give you first element which is h1 tag used inside javascript.



// Child Nodes:



let cont = document.body.childNodes[1] // here you stored first element which is div tag in the variable cont.

cont.childNodes[1] // here you are accessing the first element of the div tag which is the first box. It will give you the first box.

cont.childNodes[3] // here you are accessing the second element of the div tag which is the second box. It will give you the second box.

cont.firstElementChild // here you are accessing the first element of the div tag which is the first box. It will give you the first box.


cont.lastElementChild // here you are accessing the last element of the div tag which is the fifth box. It will give you the fifth box.




// Parent Nodes:

cont.lastElementChild.parentNode // here you are accessing the parent node of the last element of the div tag which is the fifth box. It will give you the div tag.



// Sibling Nodes:

cont.firstElementChild.nextElementSibling // here you are accessing the next sibling of the first element of the div tag. It will give you the second box.


cont.firstElementChild.nextElementSibling.nextElementSibling // here you are accessing the next sibling of the next sibling of the first element of the div tag. It will give you the third box.


cont.lastElementChild.previousElementSibling // here you are accessing the previous sibling of the last element of the div tag. It will give you the fourth box.