let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

let displayValue = '';
let currentOperator = '';
let firstValue = '';
let secondValue = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'C') {
            displayValue = '';
            display.innerText = '0';
            firstValue = '';
            secondValue = '';
            currentOperator = '';
            return;
        }

        if (buttonText === 'DEL') {
            displayValue = displayValue.slice(0, -1);
            display.innerText = displayValue || '0';
            return;
        }

        if (buttonText === '=') {
            secondValue = displayValue;
            let result = performCalculation(firstValue, secondValue, currentOperator);
            display.innerText = result;
            displayValue = result;
            firstValue = '';
            secondValue = '';
            currentOperator = '';
            return;
        }

        if (['+', '-', '*', '/'].includes(buttonText)) {
            firstValue = displayValue;
            currentOperator = buttonText;
            displayValue = '';
            return;
        }

        displayValue += buttonText;
        display.innerText = displayValue;
    });
});

function performCalculation(value1, value2, operator) {
    let num1 = parseFloat(value1);
    let num2 = parseFloat(value2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return '';
    }
}
