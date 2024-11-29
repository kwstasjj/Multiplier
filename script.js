// Variables to hold the intermediate result and the final result
let intermediateResult = 0;
let finalResult = 0;

// Function to apply the initial multiplier (1.06, 1.13, 1.24)
function applyInitialMultiplier(multiplier) {
  const inputValue = parseFloat(document.getElementById("inputNumber").value);
  
  if (isNaN(inputValue)) {
    alert("Παρακαλώ εισάγετε έναν έγκυρο αριθμό.");
    return;
  }

  // Calculate the intermediate result
  intermediateResult = inputValue * multiplier;
  
  // Update the intermediate result in the HTML
  document.getElementById("intermediateResult").innerText = intermediateResult.toFixed(2);
}

// Function to apply the final multiplier (1.20, 1.25, 1.30, 1.35, 1.40, 1.45)
function applyFinalMultiplier(multiplier) {
  if (intermediateResult === 0) {
    alert("Παρακαλώ πρώτα επιλέξτε έναν αρχικό πολλαπλασιαστή.");
    return;
  }

  // Calculate the final result
  finalResult = intermediateResult * multiplier;

  // Update the final result in the HTML
  document.getElementById("finalResult").innerText = finalResult.toFixed(2);
}

// Clear the input and results
function clearInput() {
  document.getElementById("inputNumber").value = '';
  document.getElementById("intermediateResult").innerText = '';
  document.getElementById("finalResult").innerText = '';
  intermediateResult = 0;
  finalResult = 0;
}
