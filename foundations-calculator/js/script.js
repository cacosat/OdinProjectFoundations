// Project specifications
// - Math operations: add(); sutract(); multiply(); divide();
// - Operations consist of 3 variables: 'number', 'operator', 'number'
// - There should be a 'display' variable with the display value (content)
// - Function to operate(); takes 'operator' and 2 'numbers'.
//   function triggered with '=', and updates 'display' with solution, but
//   pressing '=' before numbers throws error, or doesn't work
//   - Users should be able to string multiple operations, but they are
//     evaluated one pair at a time. Ex: (((12+7)-5)*3) = 42
//   - Round long decimals to dont overflow the screen
//   - Dividing by 0 should throw an error
//   - Operations could be changed if no 2nd num is entered
// - Clear button (AC) should clear display and start fresh (reset variables)
// - Backspace button can undo last number
// ==========================================================================

// VARIABLES 

const controls = document.querySelector('.controls');
const equals = document.querySelector('.equals');
const backspace = document.querySelector('.backspace');
const screen = document.querySelector('.screen__results');
const screenContent = document.querySelector('.results__value');

let operand = '';
let firstNum = '';
let secondNum = '';
let expression = '';
let result = 0;
const maxNumLength = 10;

function setNumAndOperator(event) {
    let buttonContent = event.target.textContent;
    if (!isNaN(buttonContent)) {
        //buttonContent is number
        if (firstNum.length <= maxNumLength  && operand === '') {
            firstNum += buttonContent;
        } else if (secondNum.length <= maxNumLength) {
            secondNum += buttonContent;
        }
    } else {
        switch (buttonContent) {
            case '+':
                operand = buttonContent;
            case '-':
                operand = buttonContent;
            case '*':
                operand = buttonContent;
            case '/':
                operand = buttonContent;
        }
    }
}

function operationExpression (firstNum, secondNum, operation) {
    let expression = '';
    if (firstNum.length !== 0 && 
        secondNum.length !== 0 &&
        operation !== '') {
            expression = firstNum + operation + secondNum;
    }
    return expression
}

function roundResult (num) {
    let parts = num.toString().split('.');
    if (parts.length >= 2 && parts[1].length >= 2) {
        // more than 2 decimal
        return Number(num.toFixed(2));
    } else {
        return Number(num);
    }
}

function showNum () {
    screenContent.textContent = firstNum + ' ' + operand + ' ' + secondNum;
    // screen.children[screen.children.length - 1].textContent = firstNum + ' ' + operand + ' ' + secondNum;
}

function updateScreen (content) {
    if (screen.children.length >= 3) {
        // makes sure it shows a maximum of 3 previous operations
        screen.removeChild(screen.children[0]);
    }
    screenContent.textContent = content;
    let previousOp = document.createElement('p');
    previousOp.textContent = firstNum + ' ' + operand + ' ' + secondNum;
    screen.insertBefore(previousOp, screenContent);
}

function reset() {
    firstNum = result;
    secondNum = '';
    operand = '';
    expression = '';
    // result = 0;
}

// EVENT LISTENERS

controls.addEventListener('click', function (event) {
    setNumAndOperator(event);
    showNum();
});

backspace.addEventListener('click', function () {
    console.log("1");
    if (secondNum === '') {
        firstNum = Number(firstNum.toString().slice(0, -1));
    } else {
        secondNum = Number(secondNum.toString().slice(0, -1));
    }
    showNum();
});

equals.addEventListener('click', function () {
    if (secondNum === '' || operand === '') {
        alert("Error, specify operation and number");
    } else {
        expression = operationExpression(firstNum, secondNum, operand);
        result = roundResult(math.evaluate(expression));
        if (result === Infinity) {
            alert("Error, divided by zero");
            result = 0;
        }
        console.log(expression);
        console.log(result);
            
        updateScreen(result);
        
        reset();
    }
});