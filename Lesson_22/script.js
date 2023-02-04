'use strict';

//const str = 'строка'.toUpperCase();
//const str2 = 'Cтрока'.toLowerCase();

//console.log(str);
//console.log(str2);

//console.log('Строка'.includes('Стр'));
//console.log('Строка'.startsWith('р'));
//console.log('Строка'.endsWith('ка'));

// const str = 'строка';
// const strUpper = str.toUpperCase();
// console.log(str);
// console.log(strUpperп);

// console.log('А роза упала на лапу Азора'.replace('А', 'а'));
// console.log('А роза упала на лапу Азора'.replaceAll('А', 'а'));

// const str = '      строка с пробелами по краям        ';
// console.log(str.trim());

// const str = 'Привет!';
// console.log(str[0]);
// console.log(str.length);

// const startsWith = '   Строка   '.trim().toLowerCase().startsWith('стр');
// console.log(startsWith);

// || - или
// && - и
// !  - не

// const a = null; 
// const b = 'Строка'; 
// const c = 0;

// const resultOr = a || b || c;
// console.log(resultOr); //первое не falsey-значение

// const resultOrw = a && b && c;
// console.log(resultOrw); //певое falsey-значение

//Операторы сравнения

// const num1 = 5;
// const num2 = 6;

// // const result = num1 == num2; //== - оператор сравнения
// // console.log(result);

// // const num3 = 5;
// // const num4 = '5';

// // const resultf = num3 === num4; //=== - оператор строгого сравнения
// // console.log(resultf);

// // const result = num1 != num2;
// // console.log(result); //!= - оператор сравнения с отрицанием
// // !== - оператор строгого сравнения с отрицанием

// console.log(num1 > num2);

// const num = 4;
// const num2 = 9;

// if (num >= 5 || num2 >= 10) {
//     console.log('Число больше или равно 5');
// } else {
//     console.log('Число меньше 5')
// }

// const age = 39;
// const name = 'Pawel';
// const lastName = 'Macivoda';

// if (age > 18 && age < 40) {
//     console.log('Ваш возраст от 18 до 40');
// }

// if (name ==='Pawel' || name ==='Pavel' && age > 18) {
//     console.log('Условие выполнилось');
// }

// const someVariable = 'Значение 2';

// switch(someVariable) {
//     case 'Значение 1':console.log('1'); break;
//     case 'Значение 2':console.log('2'); break;
//     case 'Значение 3':console.log('3'); break;
//     default: console.log('default');
// }

const loginInput = document.getElementById('login');
const loginPassword = document.getElementById('password');
const button = document.getElementById('submit');

loginInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});

loginPassword.addEventListener('input', (event) => {
    console.log(event.target.value);
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(loginInput.value);
    console.log(passwordInput.value);
});