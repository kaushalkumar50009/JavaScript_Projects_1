// import { apiKeys } from './apiKey.js';


// const btn = document.getElementById("btn");
// const copyBtn = document.getElementById("copy");
// const result = document.getElementById("result");

// let options = {
//   method: "GET",
//   headers: { "X-Api-Key": apiKeys }
// }

// const apiUrl = "https://api.api-ninjas.com/v1/loremipsum?paragraphs="


// let loremIpsumGene = async () => {

//   // const input = document.getElementById("word").areaValueMax;
//   const input = document.getElementById("word").value;
//   try {
//     const response = await fetch(apiUrl + input, options);
//     const data = await response.json();
//     console.log(data);


//   } catch (e) {
//     console.log(e);
//   }

// }

// btn.addEventListener("click", function () {
//   loremIpsumGene();
// });

// window.addEventListener("load", function () {
//   loremIpsumGene();
// });





// ! lorem ipsum generator

import { apiKeys } from './apiKey.js';

const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy");
const copyBtnText = copyBtn.querySelector("button");
const result = document.getElementById("result");

let options = {
  method: "GET",
  headers: { "X-Api-Key": apiKeys }
};

const apiUrl = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

let loremIpsumGene = async () => {
  const input = document.getElementById("word").value;
  try {
    const response = await fetch(apiUrl + input, options);
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const data = await response.json();
    // console.log(data);
    result.innerText = data.text

  } catch (e) {
    console.log(e);
  }
};

btn.addEventListener("click", function () {
  loremIpsumGene();
});

// 1st way

// copyBtn.addEventListener("click", () => {
//   navigator.clipboard.writeText(result.innerText)
// })


// 2nd way to do the

// function showMessage(message) {
//   copyBtnText.innerText = message;
//   setTimeout(() => {
//     copyBtnText.innerText = "copy";
//   }, 2000);
// }


// third way to do the same

const defaultBtnText = copyBtnText.innerText;
function showMessage(message) {
  copyBtnText.innerText = message;
  setTimeout(() => {
    copyBtnText.innerText = defaultBtnText
  }, 2000);
}


copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(result.innerText);
  showMessage("Text copied!");
});

window.addEventListener("load", function () {
  loremIpsumGene();
});




