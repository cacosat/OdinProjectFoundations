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

function showOperations () {
    if (operand !== '') {
        screenContent.textContent = secondNum
    } else {
        screenContent.textContent = firstNum;
    }
}

function updateScreen (content) {
    screenContent.textContent = content;
    let newContent = document.createElement('p');
    screen.insertBefore(newContent, screenContent);
    newContent.textContent = content;
    screenContent.textContent = '';
}

function reset() {
    firstNum = '';
    secondNum = '';
    operand = '';
    expression = '';
    // result = 0;
}

// EVENT LISTENERS

controls.addEventListener('click', function (event) {
    setNumAndOperator(event);
    showOperations();
});

equals.addEventListener('click', function () {
    // evaluate operation
    expression = operationExpression(firstNum, secondNum, operand);
    console.log(expression);
    result = math.evaluate(expression);
    console.log(result);
    reset();

    updateScreen(result);
});