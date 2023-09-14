// Define character sets for generating the password
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// Get references to HTML elements
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

// Function to get a random character from a given character set
const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

// Function to generate a password based on user input
const generatePassword = (password = "") => {
  // Include characters based on user preferences
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }

  // If the password length is less than the desired length, recursively generate more characters
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }

  // Display the generated password, truncating it if it exceeds the desired length
  passBox.innerText = truncateString(password, totalChar.value);
};

// Generate an initial password when the page loads
generatePassword();

// Add a click event listener to the "Generate" button
document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});

// Function to truncate a string to a specified length
function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
