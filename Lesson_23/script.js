'use strict';

// console.log('Hello world!', 1);
// console.log('Hello world!', 2);
// console.log('Hello world!', 3);
// console.log('Hello world!', 4);
// console.log('Hello world!', 5);
// console.log('Hello world!', 6);
// console.log('Hello world!', 7);
// console.log('Hello world!', 8);
// console.log('Hello world!', 9);
// console.log('Hello world!', 10);

// for (let i = 0; i < 10; i ++) { // (i +=1) или i++ прибавляет по одному //  
//     console.log('Hello world!', i + 1);
// }

// for (let i = 0; i < 10; i ++) { // (i +=1) или i++ прибавляет по одному //  
//     if (i === 5) {
//         break;
//     }
//     console.log('Hello world!', i + 1);
// }

// for (let i = 0; i < 10; i ++) { // (i +=1) или i++ прибавляет по одному //  
//     if (i === 5) {
//         continue;
//     }
//     console.log('Hello world!', i + 1);
// }

//1.Wbrk с предусловием

// let isLoopContinues = true;
// let i = 0;

// // while (isLoopContinues) {
// //     i = Math.random();
// //     console.log(i);

// //     if (i > 0.5) {
// //         isLoopContinues = false;
// //     }
// // }

// //2.Wbrk с постусловием

// // do {
// //     i = Math.random();
// //     console.log(i);

// //     if (i > 0.5) {
// //         isLoopContinues = false;
// //     } else {
// //         isLoopContinues = true;
// //     }
// // } while (isLoopContinues);

// while (isLoopContinues) {
//     i = Math.trunc (10 * Math.random() + 1); //trunc - отрезает все дробные числа после точки //
//     console.log(i);

//     if (i === 8) {
//         isLoopContinues = false;
//     }
// }

// //Function declaration
// function sayHello () {
//     console.log('Hello World!'); 
// }

// //Function Expression
// const sayHello2 = function () {
//     console.log('Hello World!');
// }

// //Function Expression - lambda (стрелочная функция)
// const sayHello3 = () => {
//     console.log('Hello World!');
// }

// //IIFE - Immediately Invoked Function Expression
// (function() {
//     console.log('Hello from IIFE');
// })();

//Function declaration
// let someVariable = '';

// function sayHelloToUser (firstName = '', lastName = '') {
//     const someVariable = 39;
//     console.log(`Привет, ${firstName} ${lastName}`);

//     function innerFunction() {
//         console.log(someVariable);
//     }

//     innerFunction();
// }
// console.log(someVariable);

// sayHelloToUser('Иван', 'Петров');
// sayHelloToUser('Elon');

// //Function Expression
// const sayHello2 = function () {
//     console.log('Hello World!');
// }

// //Function Expression - lambda (стрелочная функция)
// const sayHello3 = () => {
//     console.log('Hello World!');
// }

// //IIFE - Immediately Invoked Function Expression
// (function(name) {
//     console.log('Hello from IIFE', name);
// })('Андрей');

// var someVariable = 'Hello';

// function sayHello () {
//     var someVariable = 'Hello';
// }

// if (true) {
//     var someVariable = 'Hello';
// }

// console.log(someVariable);

function sayHello () {
    console.log('Hell world!');
}

function getSum (a, b) {
    return a + b;
}

const sum = getSum(4, 5) + getSum(5, 6);
console.log(sum);