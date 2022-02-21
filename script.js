// Calculator

const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("backspace");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const equalButton = document.getElementById("equal");
const squareButton = document.getElementById("square");
const rootButton = document.getElementById("root");

let lastOperation = "";
let operationNum = "";
let memory = 0;

buttons.addEventListener("click", inputNumber);
function inputNumber(event) {
  if (display.textContent.length > 15) {
    return;
  }

  let data = event.target.dataset.input;
  if (data) {
    if (data === ".") {
      if (!display.textContent.includes(".")) {
        operationNum += data;
        console.log(separate(Number(operationNum)));
        display.textContent = separate(Number(operationNum));
      }
    } else {
      operationNum += data;
      console.log(separate(Number(operationNum)));
      display.textContent = separate(Number(operationNum));
      if (!display.textContent.includes(".")) {
        display.textContent = separate(Number(operationNum));
      }
    }
  }
}

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  lastOperation = "";
  operationNum = "";
  memory = 0;
});

minusButton.addEventListener("click", () => {
  lastOperation = "minus";
  memory = Number(operationNum);
  display.textContent = 0;
  operationNum = "";
});

plusButton.addEventListener("click", () => {
  lastOperation = "plus";
  memory = Number(operationNum);
  display.textContent = 0;
  operationNum = "";
});

divideButton.addEventListener("click", () => {
  lastOperation = "divide";
  memory = Number(operationNum);
  display.textContent = 0;
  operationNum = "";
});

multiplyButton.addEventListener("click", () => {
  lastOperation = "multiply";
  memory = Number(operationNum);
  display.textContent = 0;
  operationNum = "";
});

equalButton.addEventListener("click", () => {
  if (lastOperation !== "") {
    let number = Number(operationNum);
    if (lastOperation == "minus") {
      display.textContent = separate(memory - number);
    } else if (lastOperation == "plus") {
      display.textContent = separate(memory + number);
    } else if (lastOperation == "divide") {
      display.textContent = separate(memory / number);
    } else if (lastOperation == "multiply") {
      display.textContent = separate(memory * number);
    }
    lastOperation = "";
  }
});

backButton.addEventListener("click", () => {
  if (display.textContent.length == 1) {
    display.textContent = 0;
    operationNum = "";
  } else {
    display.textContent = operationNum.substring(
      0,
      display.textContent.length - 1
    );
  }
});

squareButton.addEventListener("click", () => {
  operationNum **= 2;
  display.textContent = separate(operationNum);
  lastOperation = "";
});

rootButton.addEventListener("click", () => {
  display.textContent = separate(Math.sqrt(operationNum));
  lastOperation = "";
});
function separate(Number) {
  Number += "";
  Number = Number.replace(",", "");
  x = Number.split(".");
  y = x[0];
  z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}
