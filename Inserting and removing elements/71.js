//All of these will be done on console...All data is temporary and will be lost when you refresh the page.



//1.innerHTML"

document.querySelector(".container").innerHTML
// it gives you the inner html of container class element. 

document.querySelector(".container").innerHTML = "<h1> Hello World </h1>";
// it will change the inner html of container class element to <h1> Hello World </h1>

//2.innerText:

document.querySelector(".box").innerText
// it gives you the inner text of box class element.


document.querySelector(".box").innerText = "Ashir here";
// it will change the inner text of box class element to Hello World


//3.outerHTML:
document.querySelector(".box").outerHTML
// it gives you the outer html of box class element. It includes the element itself and its content. It will also gives u inner html of box class element.


//4.tagName:

document.querySelector(".box").tagName
// it gives you the tag name of box class element. It will return in uppercase. In this case it will return DIV.


//5.nodeName:
document.querySelector(".box").nodeName
//it gives you the node name of box class element. It will return in uppercase. In this case it will return DIV. It is same as tagName.


 
//The difference between tagName and nodeName is that tagName is used to get the tag name of an element, while nodeName is used to get the name of a node. tagName are the name of the elements and nodeName are the elements and the nodes such as text nodes, comment nodes, etc.


//6.textContent:
document.querySelector(".box").textContent
// it gives you the text content of box class element.
//Including the text and hidden text such as nodes like text, comments etc.


//7.hidden:
document.querySelector(".box").hidden
// it gives you the hidden property of box class element. It will return true if the element is hidden and false if it is not hidden. It is a boolean property. It is used to hide or show an element. If it is set to true, the element will be hidden and if it is set to false, the element will be shown.


//8.hasAttribute, getAttribute, setAttribute:

document.querySelector(".box").hasAttribute("class")
// it gives you the boolean value of whether the box class element has the class attribute or not. It will return true if the element has the class attribute and false if it does not have the class attribute.



document.querySelector(".box").getAttribute("class")
// it gives you the value of the class attribute of box class element. It will return the value of the class attribute. In this case it will return "box".



document.querySelector(".box").setAttribute("class","box1")
// it will change the value of the class attribute of box class element to box1. Now the class attribute of box class element will be box1.


