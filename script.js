function isNumber(string) {
  if (!isNaN(parseFloat(string))) {
    return true;
  }
}
function newSelect() {
  let select = document.createElement("select");
  document
    .getElementById("result")
    .insertAdjacentElement("beforebegin", select);
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  let option4 = document.createElement("option");
  option1.setAttribute("value", "+");
  option1.text = "+";
  option2.setAttribute("value", "-");
  option2.text = "-";
  option3.setAttribute("value", "*");
  option3.text = "*";
  option4.setAttribute("value", "/");
  option4.text = "/";
  select.add(option1);
  select.add(option2);
  select.add(option3);
  select.add(option4);
  select.classList.add("choice");
}
function newInput() {
  let input = document.createElement("input");
  document
    .getElementById("result")
    .insertAdjacentElement("beforebegin", input);
  input.classList.add("input");
}
function addButton() {
  let button = document.createElement("button");
  document
    .getElementById("result")
    .insertAdjacentElement("beforebegin", button);
  button.innerHTML = "Add";
  button.classList.add("button");
  button.onclick = function () {
    newAdd();
    // button.disabled = true;
    button.style.display = "none"
  };
}
function getInputs() {
  let numbers = [];
  let inputs = document.querySelectorAll(".input");
  inputs.forEach(function (input) {
    numbers.push(input.value);
  });
  return numbers;
}
function getSelects() {
  let operators = [];
  let selects = document.querySelectorAll(".choice");
  selects.forEach(function (select) {
    operators.push(select.options[select.selectedIndex].value);
  });
  return operators;
}
function newAdd() {
  newInput();
  newSelect();
  addButton();
}
let result = document.createElement("button");
document.body.appendChild(result);
result.setAttribute("id", "result");
result.innerHTML = "result";

addButton();
result.onclick = function () {
  let numbers = getInputs();
  let operators = getSelects();
  let expression = "";
  let isValid = true;

  for (let i = 0; i < numbers.length; i++) {
    if (!isNumber(numbers[i])) {
      isValid = false;
    }
    expression += numbers[i];
    expression += operators[i];
  }
  let result = "";
  expression = expression.substr(0, expression.length - 1);

  let div = document.createElement("div");
  document.getElementById("result").insertAdjacentElement("afterend", div);
  if (isValid) {
    result = eval(expression);
  } else {
    result = "invalid value";
    div.classList.add("invalid");
  }
  div.innerHTML = `${expression} = ${result}`;
  div.classList.add("result");
};

let resetButton = document.createElement("a");
document.body.appendChild(resetButton);
resetButton.setAttribute("id", "reset");
resetButton.setAttribute("href", " ");
resetButton.innerHTML = "reset";
