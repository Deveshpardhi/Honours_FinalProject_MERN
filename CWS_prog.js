let result = "0";
let lastOperator = null;

function addToResult(value) {
  if (result === "0") {
    result = value;
  } else {
    result += value;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").value = result;
}

function calculate() {
  const operand2 = parseFloat(result);
  if (lastOperator === "+") {
    result = (parseFloat(result) + operand2).toString();
  } else if (lastOperator === "-") {
    result = (parseFloat(result) - operand2).toString();
  } else if (lastOperator === "*") {
    result = (parseFloat(result) * operand2).toString();
  } else if (lastOperator === "/") {
    result = (parseFloat(result) / operand2).toString();
  }
  lastOperator = null;
  updateDisplay();
}

function clearResult() {
  result = "0";
  lastOperator = null;
  updateDisplay();
}

function toggleSign() {
  result = (parseFloat(result) * -1).toString();
  updateDisplay();
}

