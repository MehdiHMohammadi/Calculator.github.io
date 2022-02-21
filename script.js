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
        display.textContent += data;
      }
    } else {
      display.textContent += data;
      if (!display.textContent.includes(".")) {
        display.textContent = Number(display.textContent);
      }
    }
  }
}

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  lastOperation = "";
  memory = 0;
});

minusButton.addEventListener("click", () => {
  lastOperation = "minus";
  memory = Number(display.textContent);
  display.textContent = 0;
});

plusButton.addEventListener("click", () => {
  lastOperation = "plus";
  memory = Number(display.textContent);
  display.textContent = 0;
});

divideButton.addEventListener("click", () => {
  lastOperation = "divide";
  memory = Number(display.textContent);
  display.textContent = 0;
});

multiplyButton.addEventListener("click", () => {
  lastOperation = "multiply";
  memory = Number(display.textContent);
  display.textContent = 0;
});

equalButton.addEventListener("click", () => {
  if (lastOperation !== "") {
    let number = Number(display.textContent);
    if (lastOperation == "minus") {
      display.textContent = memory - number;
    } else if (lastOperation == "plus") {
      display.textContent = memory + number;
    } else if (lastOperation == "divide") {
      display.textContent = memory / number;
    } else if (lastOperation == "multiply") {
      display.textContent = memory * number;
    }
    lastOperation = "";
  }
});

backButton.addEventListener("click", () => {
  if (display.textContent.length == 1) {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
  }
});

squareButton.addEventListener("click", () => {
  display.textContent **= 2;
  lastOperation = "";
});

rootButton.addEventListener("click", () => {
  display.textContent = Math.sqrt(display.textContent);
  lastOperation = "";
});
