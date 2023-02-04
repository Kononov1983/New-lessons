'use strict';

//let someVariable = 'Hello World';
//const someConstant = 'Hello World';

//console.log(someVariable);
//console.log(someVariable);
//console.log(someVariable);

//const a = 5;
//let b = 6;

//b = 4;

//console.log((a + b) / a);

const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (event) => {
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
});