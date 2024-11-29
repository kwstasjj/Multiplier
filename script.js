let currentInput = '0'; // Store current input value
let intermediateResult = 0; // Store intermediate result after ΦΠΑ
let finalResult = 0; // Store final result after ΚΕΡΔΟΥΣ
let operator = ''; // Store current operator for arithmetic operations

// Function to append numbers to the display
function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number; // If the display is '0', replace it with the number
  } else {
    currentInput += number; // Otherwise, append the number
  }
  updateDisplay();
}

// Function to append the decimal point
function appendDecimal() {
  if (!currentInput.includes('.')) { // Ensure only one decimal point
    currentInput += '.';
  }
  updateDisplay();
}

// Function to update the display
function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

// Function to clear the display
function clearDisplay() {
  currentInput = '0';
  operator = '';
  intermediateResult = 0;
  finalResult = 0;
  updateDisplay();
  document.getElementById('intermediateResult').textContent = '';
  document.getElementById('finalResultNumber').textContent = '';
  document.getElementById('errorMessage').textContent = '';
}

// Function to handle arithmetic operators
function appendOperator(op) {
  if (operator === '') {
    intermediateResult = parseFloat(currentInput);
    currentInput = '0';
  } else {
    calculate();
  }
  operator = op;
  document.getElementById('errorMessage').textContent = ''; // Clear any error messages
}

// Function to perform the calculation
function calculate() {
  if (operator === '+') {
    intermediateResult += parseFloat(currentInput);
  } else if (operator === '-') {
    intermediateResult -= parseFloat(currentInput);
  } else if (operator === '*') {
    intermediateResult *= parseFloat(currentInput);
  } else if (operator === '/') {
    if (currentInput === '0') {
      document.getElementById('errorMessage').textContent = 'Δεν μπορείς να διαιρέσεις με το 0!';
      return;
    }
    intermediateResult /= parseFloat(currentInput);
  }
  currentInput = intermediateResult.toString();
  updateDisplay();
  operator = ''; // Reset operator after calculation
}

// Function to apply initial multiplier (ΦΠΑ)
function applyInitialMultiplier(multiplier) {
  const inputValue = parseFloat(currentInput);
  if (isNaN(inputValue)) {
    document.getElementById("errorMessage").innerText = "Παρακαλώ εισάγετε έναν έγκυρο αριθμό.";
    return;
  }
  intermediateResult = inputValue * multiplier;
  document.getElementById("intermediateResult").innerHTML = `ΤΙΜΗ ΜΕ ΦΠΑ: ${intermediateResult.toFixed(2)} <span style="color: green; font-weight: bold;">(${multiplier === 1.06 ? '6%' : multiplier === 1.13 ? '13%' : '24%'})</span>`;
}

// Function to apply final multiplier (ΚΕΡΔΟΥΣ)
function applyFinalMultiplier(multiplier) {
  if (intermediateResult === 0) {
    document.getElementById("errorMessage").innerText = "Παρακαλώ εισάγετε πρώτα έναν αριθμό και υπολογίστε ΦΠΑ.";
    return;
  }
  finalResult = intermediateResult * multiplier;
  document.getElementById("finalResultNumber").innerText = finalResult.toFixed(2);
}

// Keyboard input functionality
document.addEventListener('keydown', function(event) {
  if (event.key >= '0' && event.key <= '9') {
    appendNumber(event.key);
  } else if (event.key === '.') {
    appendDecimal();
  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    appendOperator(event.key);
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    clearDisplay();
  }
});
