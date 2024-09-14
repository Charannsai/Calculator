let displayValue = ''; 
let isResultDisplayed = false; 

function appendNumber(number) {
    if (isResultDisplayed) {
        displayValue = '';
        isResultDisplayed = false;
    }
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    if (isResultDisplayed) {
        isResultDisplayed = false;
    }
    displayValue += ' ' + operator + ' ';
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.trim().slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    try {
        
        displayValue = eval(displayValue.replace(/÷/g, '/').replace(/×/g, '*'));
        document.getElementById('display').value = displayValue;
        isResultDisplayed = true; 
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
        isResultDisplayed = false;
    }
}
