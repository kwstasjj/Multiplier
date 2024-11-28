let intermediateResult = 0; // Store intermediate result after applying the first multiplier

// Function to apply the first multiplier (1.06, 1.13, 1.24)
function applyInitialMultiplier(multiplier) {
  let inputValue = parseFloat(document.getElementById("inputNumber").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  // Apply the initial multiplier to the input value
  intermediateResult = inputValue * multiplier;

  // Display the intermediate result after applying the initial multiplier
  document.getElementById("result").textContent = `Intermediate Result: ${intermediateResult.toFixed(2)}`;
}

// Function to apply the final multiplier (1.20, 1.25, 1.30, 1.35, 1.40, 1.45)
function applyFinalMultiplier(finalMultiplier) {
  if (intermediateResult === 0) {
    alert("Please apply an initial multiplier first (1.06, 1.13, or 1.24).");
    return;
  }

  // Multiply the intermediate result by the final multiplier
  let finalResult = intermediateResult * finalMultiplier;

  // Display the final result
  document.getElementById("result").textContent = `Final Result: ${finalResult.toFixed(2)}`;
}

// Function to clear the input and reset the result
function clearInput() {
  document.getElementById("inputNumber").value = '';
  document.getElementById("result").textContent = '';
  intermediateResult = 0; // Reset the intermediate result
}