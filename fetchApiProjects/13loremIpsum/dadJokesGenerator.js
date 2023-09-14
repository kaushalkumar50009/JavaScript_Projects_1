// import { apiKeys } from './apiKey.js';

// const btn = document.getElementById("btn");
// const copyBtn = document.getElementById("copy");
// const copyBtnText = copyBtn.querySelector("button");
// const result = document.getElementById("result");

// let options = {
//     method: "GET",
//     headers: { "X-Api-Key": apiKeys }
// };

// const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=";

// let dadJokesGenerator = async () => {
//     const input = document.getElementById("word").value;
//     try {
//         const response = await fetch(apiUrl + input, options);
//         if (!response.ok) {
//             throw new Error("Error: " + response.status);
//         }
//         const data = await response.json();
//         console.log(data);

//         const jokes = data.map((jokeObj) => jokeObj.joke);
//         result.innerText = jokes.join("\n");

//     } catch (e) {
//         console.log(e);
//     }
// };

// btn.addEventListener("click", function () {
//     dadJokesGenerator();
// });

// const defaultBtnText = copyBtnText.innerText;

// function showMessage(message) {
//     copyBtnText.innerText = message;
//     setTimeout(() => {
//         copyBtnText.innerText = defaultBtnText;
//     }, 2000);
// }

// copyBtn.addEventListener("click", () => {
//     navigator.clipboard.writeText(result.innerText);
//     showMessage("Text copied!");
// });

// window.addEventListener("load", function () {
//     dadJokesGenerator();
// });
