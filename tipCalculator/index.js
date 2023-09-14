// Get references to HTML elements
const btn = document.querySelector(".calculate_btn"); // The calculate button
const reset_btn = document.querySelector(".reset_btn"); // The reset button
const tip = document.querySelector(".tip"); // Element to display the calculated tip
const total = document.querySelector(".total"); // Element to display the total bill
const error = document.querySelector(".error"); // Element to display error messages

// Function to hide error messages after a delay
const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000); // Hide the error message after 5 seconds (5000 milliseconds)
};

// Function to calculate the tip and total bill
const calculateTip = () => {
  // Get the bill amount and tip rate from input fields
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  // Check if either the bill amount or tip rate is empty
  if (bill === "" || rate == "") {
    error.style.display = "block"; // Display an error message
    hideError(); // Hide the error message after a delay
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number"; // Display a specific error message for non-numeric input
    error.style.display = "block"; // Display the error message
    hideError(); // Hide the error message after a delay
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt); // Round the tip amount to the nearest integer
    tip.innerHTML = `Tip: $${tipAmt}`; // Display the calculated tip

    let totalBill = Number(bill) + tipAmt; // Calculate the total bill
    total.innerHTML = `Total Bill: $${totalBill}`; // Display the total bill
  }
};

// Add a click event listener to the calculate button
btn.addEventListener("click", calculateTip);

//reset the input field
reset_btn.addEventListener("click", () => {
  document.querySelector(".bill").value = "";
  document.querySelector(".rate").value = "";
});
