// Store the current input on the screen
let currentInput = "";

// Append value to the screen
function appendToScreen(value) {
  currentInput += value;
  document.getElementById("screen").value = currentInput;
}

// Perform the operations
let operation = "";
let firstValue = null;

function performOperation(op) {
  if (firstValue === null) {
    firstValue = parseFloat(currentInput);
  }
  operation = op;
  currentInput = "";
}

// Calculate the result when the equals button is pressed
function calculateResult() {
  if (firstValue !== null && currentInput !== "") {
    let secondValue = parseFloat(currentInput);
    let result = 0;

    switch (operation) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "/":
        result = firstValue / secondValue;
        break;
      case "%":
        result = firstValue % secondValue;
        break;
    }

    document.getElementById("screen").value = result;
    firstValue = result;
    currentInput = result.toString();
    operation = "";
  }
}

// Clear the screen
function clearScreen() {
  currentInput = "";
  firstValue = null;
  operation = "";
  document.getElementById("screen").value = "";
}

// Perform square of the number
function performSquare() {
  if (currentInput !== "") {
    let value = parseFloat(currentInput);
    let result = Math.pow(value, 2);
    document.getElementById("screen").value = result;
    currentInput = result.toString();
  }
}
