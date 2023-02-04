'use strict';

const num = 5;  //1.number =-(2^53-1)
console.log(typeof num);

const floatNum = 5.2;  //number =-(2^53-1)
const typeOfFloatNum = typeof floatNum;
console.log(typeOfFloatNum);

const bigNum = BigInt(9007199254740992); //2.bigint число произвольной длины
console.log(typeof bigNum);

const strDoubleQuote = "String" //3.строка в двойных кавычках
const strSingleleQuote = 'String' //строка в одинарных кавычках

const name = 'Hello I\'m Andrew';
const quote = "He said: \"I wanna go home\"";

const strItalicQuote = `Hello, I have ${bigNum} aplles`; // ` - позволяет переносить текст на несколько строк и вставлять другие const
const strWithAplles = 'Hello, I have ' + bigNum + ' aplles';
console.log(typeof strWithAplles);

const isVisible = true; //4.boolean
const isHidden = false; //boolean
const hasAplles = true; //boolean
console.log(typeof hasAplles);

const someConstant = null; //5.null
console.log(typeof someConstant);

let someVariable; //6.underfinde
console.log(typeof someVariable);