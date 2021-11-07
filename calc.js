function add() {
    const number1 = parseFloat(prompt('Enter a number'));
    const number2 = parseFloat(prompt('Enter another number'));
    result = number1 + number2;
    alert(`The answer is ` + (result));
}

function subtract() {
    const number1 = parseFloat(prompt('Enter a number'));
    const number2 = parseFloat(prompt('Enter another number'));
    result = number1 - number2;
    alert(`The answer is ` + (result));
}

function multiply() {
    const number1 = parseFloat(prompt('Enter a number'));
    const number2 = parseFloat(prompt('Enter another number'));
    result = number1 * number2;
    alert(`The answer is ` + (result));
}

function divide() {
    const number1 = parseFloat(prompt('Enter a number'));
    const number2 = parseFloat(prompt('Enter another number'));
    result = number1 / number2;
    alert(`The answer is ` + (result));
}

function squareroot() {
    const number1 = parseFloat(prompt('Enter another number'));
    result = Math.sqrt(number1);
    alert(`The answer is ` + (result));
}

function power() {
    const number1 = parseFloat(prompt('Enter a number'));
    const number2 = parseFloat(prompt('Enter another number'));
    result = Math.pow(number1, number2);
    alert(`The answer is ` + (result));
}