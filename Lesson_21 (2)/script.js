'use strict';

// 1.Строковый тип преобразования

//const num = 5;
//const bool = true;

//const strFromNum = String(num);
//console.log(typeof strFromNum);

//const strFromBool = String(bool);
//console.log(typeof strFromBool);
//console.log(strFromBool);

//const strFromNum = '' + num;
//console.log(typeof strFromNum);

//2.Числовой тип преобразования

//const str = '5';
//const bool = true;

//const numberFromStr = Number(str);
//console.log(numberFromStr);
//console.log(typeof numberFromStr);

// const str = '5ghhjjki';
// const bool = true;

// const numberFromStr = Number(str);
// console.log(numberFromStr);
// console.log(typeof numberFromStr);

// const numberFromBool = Number(bool);
// console.log(numberFromBool);

//Булевский тип преобразования

// const str = 'dfghj';
// const num = 5;

// const boolFromStr = Boolean(str);
// console.log(boolFromStr);

// const boolFromNum = Boolean(num);
// console.log(boolFromNum);

//falsey-значения
// 0, null, underfind=ed, '', NaN

//выражение
//операторы - + - / *
//операнды - числа, с которыми производится операция

//типы операторов - унарные и бинарные
//+ - * / - бинарные операторы, потому что требуют два числа
//+num - унарный оператор

const result = 5 + 10 * 5 / 10 - 7;
console.log(result);

const division = 15 % 4 * result;
console.log(division); //остаток от деления

const pow = 5**2;
console.log(pow);

const res = 5 + 'redfg';
console.log(res);

const divisionByZero = 1 / 0;
console.log(divisionByZero);

//Сокрашенная арифметика

let n = 1;
n = n + 2;
n = n * 3;
console.log(n);

n = n *=3; // n = n * 3
n = n +=3; // n = n + 3
n = n -=3; // n = n - 3
n = n /=3; // n = n / 3
console.log(n);

n++; // увеличение на 1 (инкремент) постфиксная запись
n--; // уменьшение на 1 (декремент) постфиксная запись
n--; // уменьшение на 1
console.log(n);

++n; // префиксная запись
console.log(n); 