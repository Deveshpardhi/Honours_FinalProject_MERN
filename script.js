let result = "0";
let lastOperator = null;

function addToResult(value)
{
  if (result === "0") {
    result = value;
  } else {
    result += value;
  }
  updateDisplay();
}

function updateDisplay() 
{
  document.getElementById("result").value = result;
}

function calculate() 
{
  result=eval(result);
  updateDisplay();
}

function clearResult() 
{
  result = "0";
  lastOperator = null;
  updateDisplay();
}

function toggleSign() 
{
  result = (parseFloat(result) * -1).toString();
  updateDisplay();
}