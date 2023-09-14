// Get a reference to the HTML element where we'll display the result
const show_result = document.getElementById("result");
//reload the browser for another calculation
const refresh = document.querySelector(".refresh");

// Prompt the user to choose an operator
const operator = prompt("Choose your operator +, -, *, /");

// Prompt the user to enter two numbers
const num1 = parseFloat(prompt("Enter the first number"));
const num2 = parseFloat(prompt("Enter the second number"));

let result;

// Perform calculations based on the chosen operator
switch (operator) {
  case "+":
    result = num1 + num2;
    // Display the addition result
    show_result.innerText = `${num1} + ${num2} = ${result}`;
    break;
  case "-":
    result = num1 - num2;
    // Display the subtraction result
    show_result.innerText = `${num1} - ${num2} = ${result}`;
    break;
  case "*":
    result = num1 * num2;
    // Display the multiplication result
    show_result.innerText = `${num1} * ${num2} = ${result}`;
    break;
  case "/":
    result = num1 / num2;
    // Display the division result
    show_result.innerText = `${num1} / ${num2} = ${result}`;
    break;
  default:
    // Display an error message for an invalid operator
    show_result.innerText = "Please use a valid operator (+, -, *, /)";
    break;
}

refresh.addEventListener("click", () => {
  // Reload the page
  window.location.reload();
});
