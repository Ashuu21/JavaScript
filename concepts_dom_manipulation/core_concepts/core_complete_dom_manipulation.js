// /*-------------------------------------Introduction to the DOM

// What is the DOM?: The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
// DOM tree structure: The DOM represents the document as a tree of nodes, with each node corresponding to an element, attribute, or text.
// Nodes: Nodes are the fundamental units of the DOM, representing elements (tags), attributes (like class or id), and text within elements.


// ----------------------Selecting DOM Elements
// 
// // document.getElementById(): Selects a single element by its unique ID.

const myRoot=document.getElementById('root');

console.log(myRoot);


// document.getElementsByClassName(): Selects all elements with a given class name.


const myNavbar=document.getElementsByClassName('navbar');

console.log(myNavbar);

// document.getElementsByTagName(): Selects all elements with a specific tag name.

const myTag=document.getElementsByTagName('ul');

console.log(myTag);


// document.querySelector(): Selects the first element that matches a CSS selector.

const mySingleLi=document.querySelector('li');

console.log(mySingleLi);

// document.querySelectorAll(): Selects all elements that match a CSS selector.

const myList=document.querySelectorAll('li');

console.log(myList);


// ------------------------Manipulating Content


// innerHTML vs textContent: innerHTML sets or retrieves HTML content inside an element, while textContent sets or retrieves text content only.
mySingleLi.textContent=`<a href="#">LOGO</a>`;

// Adding/removing text content: Methods for dynamically changing the text inside an element.
mySingleLi.innerHTML=mySingleLi.innerHTML.replace('LOGO','');//removing inner text
mySingleLi.innerHTML=`<a href="#">TCA</a>`;//adding inner content
mySingleLi.textContent='';//removing inner text
mySingleLi.textContent+='[ TC';//adding inner content
mySingleLi.textContent+='A ]';//adding inner content

// Working with innerHTML, outerHTML: innerHTML allows setting or getting the HTML inside an element, while outerHTML includes the element itself.
mySingleLi.innerHTML=`<a href="#">TCA</a>`;//adding inner content
mySingleLi.outerHTML=`
        <strong style="background-color:gold ;padding :5px; border-radius:50px; ">
          <a id="logo" href="#HOME" >TCA</a>
        </strong>`;//adding inner content


// -----------------------Manipulating Styles


// Inline styles: style property: Directly sets styles on an element using the style property.
mySingleLi.style.backgroundColor="aliceblue";
mySingleLi.style.color="red";
mySingleLi.style.fontSize="28px";


// Adding/removing CSS classes: classList property (add(), remove(), toggle(), contains()): Methods for dynamically adding, removing, toggling, and checking for CSS classes on an element.
const bgChange = document.querySelector('span');
const modeIcon = document.getElementById('mode');
const myList1 = document.querySelector('.myList'); // Select the myList

bgChange.id = "bg-changer"; // Adding id to the span
bgChange.className = "bg-changer1"; // Adding class to span
bgChange.classList.add("light"); // Start with light class

// Function to toggle between dark and light classes
modeIcon.onclick = function() {
    if (bgChange.classList.contains("light")) {
        bgChange.classList.remove("light");
        bgChange.classList.add("dark");
        document.body.style.backgroundColor = "black";
        modeIcon.style.fill = "white"; // Change SVG color to white
        myList1.style.backgroundColor = "gray"; // Change myList background color
        myList1.style.color = "white"; // Change myList text color
        myList1.querySelectorAll('a').forEach(link => link.style.color = "white"); // Change link color
    } else {
        bgChange.classList.remove("dark");
        bgChange.classList.add("light");
        document.body.style.backgroundColor = "white";
        modeIcon.style.fill = "black"; // Change SVG color to black
        myList1.style.backgroundColor = ""; // Reset myList background color
        myList1.style.color = "black"; // Change myList text color
        myList1.querySelectorAll('a').forEach(link => link.style.color = "black"); // Reset link color
    }
};

// Handling computed styles: getComputedStyle(): Retrieves the actual computed styles applied to an element, as determined by the browser.


// ---------------------- Manipulating DOM Elements

// Creating elements: document.createElement(): Creates a new element node.
// Appending elements: appendChild(), insertBefore(): Appends a new child node to a parent or inserts it before an existing child node.
// Removing elements: removeChild(): Removes a child node from its parent node.
// Replacing elements: replaceChild(): Replaces an existing child node with a new one.

// ---------------------Manipulating Attributes

// Getting and setting attributes: getAttribute(), setAttribute(): Retrieves or sets the value of an attribute on an element.
// Removing attributes: removeAttribute(): Removes an attribute from an element.
// Handling data attributes: Special attributes prefixed with data- used for embedding custom data within elements.

// -------------------- DOM Traversal

// Parent, child, and sibling relationships: Refers to navigating through parent, child, and sibling nodes within the DOM tree.
// parentNode, childNodes, firstChild, lastChild: Properties that allow access to the parent of a node, all child nodes, the first child, and the last child of a node.
// previousSibling, nextSibling: Properties that allow access to the previous and next sibling nodes.
