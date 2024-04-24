// //Lesson 9 Document Object Module
// //The DOM is more of like a userinterface that combines Javascript with HTML,Just like react uses JSX to combine javacript with html elements.

// //Changing and accessing the title with the DOM
// console.log(document.title);
// document.title = 'DOM';

// //Changing and accessing the body with the DOM.
// //We use dot notation to access elements of the document object.
// console.log(document);                //document is an object
// console.log(typeof document);         //Proving that document is an object
// console.log(document.body);           //outputing the body object
// console.log(typeof document.body);    //Proving that document.body is an object


// //Outputing the entire html in our document object
// //innerHTML lets us get any html element and put it inside your javascript.
// console.log(document.body.innerHTML)
// document.body.innerHTML = '<button>UI Changed</button>'


// querySelecter lets us get any specific type of 
console.log(document.querySelector('button').innerHTML);
(document.querySelector('button').innerHTML);
document.querySelector('button')
  .innerHTML = 'changed';

const buttonElement = document.querySelector('.js-button').innerHTML;
console.log(buttonElement);









































// document.body.innerHTML = 'hello DOM';
// document.title = 'Document Object Module Lesson';