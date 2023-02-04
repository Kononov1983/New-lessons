'use strict';

const button = document.getElementById('action');
const output = document.getElementById('result');

button.addEventListener('click', (event) => {
    let operand1 = document.getElementById('operand1').value;
    let operand2 = document.getElementById('operand2').value;
    const operation = document.getElementById('operation').value;
    let result;

    event.preventDefault();

    if  (operand1 === '') {return output.innerText = 'Первое число не указано', console.log('Первое число не указано')};

    if  (operand2 === '') {return output.innerText = 'Второе число не указано', console.log('Второе число не указано')};

    if  (operation === '') {return output.innerText = 'Не введен знак', console.log('Не введен знак')};

    switch (operation) {
        case '+': result = Number (operand1) + Number (operand2); 
        document.getElementById('result').value = `${result}`;
        break;
        case '-': result = Number (operand1) - Number (operand2); 
        document.getElementById('result').value = `${result}`;
        break; 
        case '*': result = Number (operand1) * Number (operand2); 
        document.getElementById('result').value = `${result}`;
        break; 
        case '/': result = Number (operand1) / Number (operand2); 
        document.getElementById('result').value = `${result}`;
        break;
    };

    if (operand1 === 0) {
        return output.innerText = '${result}',  console.log(result)}
})