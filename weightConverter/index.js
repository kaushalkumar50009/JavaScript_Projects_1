// Select all input containers
const inputs = document.querySelectorAll(".container");

// Select the reset button
const reset = document.getElementById("reset");

// Add an input event listener to each input field
inputs.forEach((input) => {
  input.addEventListener("input", converter);
});

// Converter function to perform the conversions
function converter(e) {
  // Check which input field is being edited
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value;
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }
  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value;
    pounds.value = (x * 2.2046).toFixed(2);
    grams.value = (x * 1000).toFixed(2);
    ounces.value = (x * 35.274).toFixed(2);
  }
  if (e.target.classList.contains("grams")) {
    let x = e.target.value;
    pounds.value = (x * 0.0022046).toFixed(2);
    kilograms.value = (x / 1000).toFixed(2);
    ounces.value = (x * 0.035247).toFixed(2);
  }
  if (e.target.classList.contains("ounces")) {
    let x = e.target.value;
    pounds.value = (x * 0.0625).toFixed(2);
    kilograms.value = (x / 35.274).toFixed(2);
    grams.value = (x * 0.035247).toFixed(2);
  }
}

// Add a click event listener to the reset button
reset.addEventListener("click", () => {
  // Clear all input fields when reset button is clicked
  pounds.value = "";
  kilograms.value = "";
  grams.value = "";
  ounces.value = "";
});
