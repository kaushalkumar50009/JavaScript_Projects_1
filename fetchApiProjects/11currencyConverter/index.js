// import { currencies } from './currencyCodes.js';
// import { apiKey } from './apiKey.js';

// // paste generated code here
// const fromDropdown = document.getElementById("from_currency")
// const toDropdown = document.getElementById("to_currency")
// const result = document.getElementById("result")


// // create dropdown from the currencies array

// currencies.forEach((currency) => {
//   const option = document.createElement('option')
//   option.value = currency
//   option.text = currency
//   fromDropdown.add(option)
//   // fromDropdown.uppendChild(option)

// })
// currencies.forEach((currency) => {
//   const option = document.createElement('option')
//   option.value = currency
//   option.text = currency
//   toDropdown.add(option)
//   // fromDropdown.uppendChild(option)

// })


// const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// // setting default value
// fromDropdown.value = "USD"
// toDropdown.value = "INR"

// let convertCurrency = () => {
//   const amount = document.querySelector("#number").value
//   const fromCurrency = fromDropdown.value
//   const toCurrency = toDropdown.value

//   // check the field is empty or not
//   if (amount.length !== 0 && amount > 0) {
//     // alert("okay")
//     fetch(apiUrl).then(response => response.json()).then((data) => {
//       console.log(data)
//       let fromExchangeRate = data.conversion_rates[fromCurrency]
//       let toExchangeRate = data.conversion_rates[toCurrency]

//       const convertedAmount = (amount / fromExchangeRate) * toExchangeRate
//       result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency} `
//     })


//   }
//   else {
//     result.innerText = "please fill the amount or value should be the positive number or greater than zero"
//   }
// }


// btn = document.getElementById("btn");




// btn.addEventListener("click", function () {
//   convertCurrency();
// });
// window.addEventListener("load", function () {
//   convertCurrency();
// });



import { currencies } from './currencyCodes.js';
import { apiKey } from './apiKey.js';

const fromDropdown = document.getElementById("from_currency");
const toDropdown = document.getElementById("to_currency");
const result = document.getElementById("result");

// Create dropdown from the currencies array
currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;
  fromDropdown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;
  toDropdown.add(option);
});

const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Setting default value
fromDropdown.value = "USD";
toDropdown.value = "INR";

const convertCurrency = async () => {
  const amount = document.querySelector("#number").value;
  const fromCurrency = fromDropdown.value;
  const toCurrency = toDropdown.value;

  // Check if the field is empty or not
  if (amount.length !== 0 && amount > 0) {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      let fromExchangeRate = data.conversion_rates[fromCurrency];
      let toExchangeRate = data.conversion_rates[toCurrency];

      const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
      result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
      console.error(error);
      result.innerText = "An error occurred while fetching the exchange rates.";
    }
  } else {
    result.innerText = "Please fill the amount or value should be a positive number greater than zero.";
  }
};

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  convertCurrency();
});

window.addEventListener("load", function () {
  convertCurrency();
});

