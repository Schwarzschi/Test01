let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += ' ' + operator + ' ';
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace(/ /g, ''));
        document.getElementById('display').value = displayValue;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
