let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;
let previousRow = document.getElementById('result-previous-row');

//function to reset screen when adding numbers
function resetScreen() {
    outputRow.textContent = '';
    shouldResetScreen = false;
  }

//Clear button
function ClearFields() {
    currentOperation = null;
    document.getElementById("result-previous-row").textContent = "";
    document.getElementById("result-output-row").textContent = "0";
}

//Del button
const outputRow = document.getElementById("result-output-row");
function removeLastChar(){
    if(outputRow.textContent == 1 || outputRow.textContent == 0) {
        outputRow.textContent = 0;
    } else {
        outputRow.textContent = outputRow.textContent.substring(0, outputRow.textContent.length - 1); //remove by 1 upon click
    }
}//Note that the number here is text, remember to convert to number when doing calculations

//number buttons feature
const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent)) //call appendNumber
)

function appendNumber(number) {
    if(outputRow.textContent === '0' || shouldResetScreen) 
    {
        resetScreen(); //will resetScreen() when operator is set
        outputRow.textContent += number;}
    else{
    outputRow.textContent += number;}
}

//equal button
const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => evaluate());


//operator feature
const operatorButtons = document.querySelectorAll('[data-operator]');
operatorButtons.forEach((button) =>
  button.addEventListener('click',()=> setOperation(button.textContent)
  )) 

function setOperation(operator){
    if (currentOperation !== null) evaluate(); //evaluate if currentOperation is not empty
    currentOperation = operator; //storing operator as currentOperation
    firstOperand = outputRow.textContent; 
    previousRow.textContent = `${firstOperand} ${currentOperation}`; //setting previousrow content
    shouldResetScreen = true;
}

function evaluate(){ //evaluate function will not do anything if there is no second operand and no operator is selected
    if(currentOperation == null || shouldResetScreen) return;
    if(currentOperation == '÷' && outputRow.textContent == '0'){
        alert('Error'); //cannot divide by 0
        return;
    }
    secondOperand = outputRow.textContent; //second operand is whatever is written on the screen after moving the first operand to previousRow
    outputRow.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand)); //operate to get answer
    previousRow.textContent = `${firstOperand}${currentOperation}${secondOperand}`; //previous row will show operation
    currentOperation = null; //remove operator from currentOperation variable
}

//operation functions
function add(a,b){
    return a + b;
}
function minus(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a/b;
}

//operate function with switch case for operator decision
function operate(operator, a, b){
    a=Number(a); //converting to number as it is currently string
    b=Number(b);

    switch (operator){
        case '+':
            return add(a,b);
        case '-':
            return minus(a,b);
        case '*':
            return multiply(a,b);
        case '÷':
            if (b == 0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}
//round result feature as there are random small decimals, only operations of 5 dp
function roundResult(number) {
    return Math.round(number * 100000) / 100000;
  }

//decimal feature
const pointButton = document.getElementById('decimal');
pointButton.addEventListener('click', appendPoint);
function appendPoint() {
    if (shouldResetScreen) resetScreen() //if operator is last clicked button
    if (outputRow.textContent === '')
    outputRow.textContent = '0' //put a 0 after screen was reset to add decimal on it
    if (outputRow.textContent.includes('.')) return //return if there is already a decimal point
    outputRow.textContent += '.'
  }