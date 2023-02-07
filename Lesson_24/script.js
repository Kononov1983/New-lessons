'use strict';

// hoisting

// sayHello3 ();
// sayHello2 ();
// sayHello ();

// function sayHello () {
//     console.log('Hello From Declaration');
// }

// const sayHello2 = function () {
//     console.log ('Hello From Expression');
// }

// const sayHello3 = () => {
//     console.log ('Hello From Lambda Expression');
// }

// console.log (x);
// var x = '3';
// // console.log (x);

// function printX () {
//     console.log (x);

//     var x = '5';
// }
// printX ();

// let x = '3';
// // console.log (x);

// function printX () {
//     console.log (x);

//     let x = '5';
// }
// printX ();

//Замыкания
//Closures
//Способность функции запоминать переменные из контекста, где она была создана

// let func;

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         func = function () {
//             console.log (i);
//         }
//     }
// }

// func ();

// let func;

// let i;

// for (i = 0; i < 10; i++) {
//     if (i === 5) {
//         func = function () {
//             console.log (i);
//         }
//     }
// }

// func ();

// const button = document.getElementById('button');

// const someVariable = 'Привет, мир!';

// button.addEventListener ('click', function () {
//     console.log (someVariable);
// });


// let func;

// if (true) {
//     let i = 10;

//     func = function () {
//         console.log (i);
//     }
// }

// func ();

const person = {
    firstName: 'Andrew',
    lastName: 'Garfield',
    body: {
        // age: 50,
        height: 185
    }
}

// if (person.bode) {
//     console.log (person.body.age);
// }

console.log (person.body?.age);

//console.log (person.body.age);

// const person2 = {
//     firstName: 'Andrew',
//     lastName: 'Garfield',
//     body: {
//         age: 50,
//         height: 185
//     }
// }

// const person2 = person;

// person2.firstName = 'Andrey';

// console.log (person.firstName);