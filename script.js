// Variables to hold the intermediate result and the final result
let intermediateResult = 0;
let finalResult = 0;
let appliedInitialPercentage = '';

// Function to apply the initial multiplier (1.06, 1.13, 1.24)
function applyInitialMultiplier(multiplier) {
  const inputValue = parseFloat(document.getElementById("inputNumber").value);
  
  if (isNaN(inputValue)) {
    document.getElementById("errorMessage").innerText = "Παρακαλώ εισάγετε έναν έγκυρο αριθμό.";
    return;
  } else {
    document.getElementById("errorMessage").innerText = ''; // Clear any previous error message
  }

  // Calculate the intermediate result
  intermediateResult = inputValue * multiplier;

  // Determine the percentage based on the multiplier
  let percentage = '';
  if (multiplier === 1.06) {
    percentage = '6%';
  } else if (multiplier === 1.13) {
    percentage = '13%';
  } else if (multiplier === 1.24) {
    percentage = '24%';
  }

  // Update the intermediate result in the HTML with the percentage in bold green
  document.getElementById("intermediateResult").innerHTML = `ΤΙΜΗ ΜΕ ΦΠΑ: ${intermediateResult.toFixed(2)} <span style="color: green; font-weight: bold;">(${percentage})</span>`;
}

// Function to apply the final multiplier (1.20, 1.25, 1.30, 1.35, 1.40, 1.45)
function applyFinalMultiplier(multiplier) {
  if (intermediateResult === 0) {
    document.getElementById("errorMessage").innerText = "Παρακαλώ πρώτα επιλέξτε έναν αρχικό πολλαπλασιαστή.";
    return;
  }

  // Calculate the final result
  finalResult = intermediateResult * multiplier;

  // Update only the result number in the final result (in bold and red)
  document.getElementById("finalResultNumber").innerText = finalResult.toFixed(2);
}

// Clear the input and results
function clearInput() {
  document.getElementById("inputNumber").value = '';
  document.getElementById("intermediateResult").innerText = '';
  document.getElementById("finalResultNumber").innerText = '';
  document.getElementById("errorMessage").innerText = '';
  intermediateResult = 0;
  finalResult = 0;
  appliedInitialPercentage = '';
}
