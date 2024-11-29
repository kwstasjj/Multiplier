let currentInput = '0'; // Store current input value
let intermediateResult = 0; // Store intermediate result after ΦΠΑ
let finalResult = 0; // Store final result after ΚΕΡΔΟΥΣ

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
  intermediateResult = 0;
  finalResult = 0;
  updateDisplay();
  document.getElementById('intermediateResult').textContent = '';
  document.getElementById('finalResultNumber').textContent = '';
  document.getElementById('errorMessage').textContent = '';
}

// Function to apply initial multiplier (ΦΠΑ)
function applyInitialMultiplier(multiplier) {
  const inputValue = parseFloat(currentInput);
  if (isNaN(inputValue)) {
    document.getElementById("errorMessage").innerText = "Παρακαλώ εισάγετε έναν έγκυρο αριθμό.";
    return;
  }
  intermediateResult = inputValue * multiplier;
  document.getElementById("intermediateResult").innerText = intermediateResult.toFixed(2); // Update the result next to ΤΙΜΗ ΜΕ ΦΠΑ
}

// Function to apply final multiplier (ΚΕΡΔΟΥΣ)
function applyFinalMultiplier(multiplier) {
  const inputValue = parseFloat(currentInput);
  if (isNaN(inputValue) && intermediateResult === 0) {
    document.getElementById("errorMessage").innerText = "Παρακαλώ εισάγετε πρώτα έναν αριθμό.";
    return;
  }
  finalResult = intermediateResult * multiplier;
  document.getElementById("finalResultNumber").innerText = finalResult.toFixed(2); // Update the final result next to ΤΙΜΗ ΜΕ ΦΠΑ ΚΑΙ ΚΕΡΔΟΣ
}
