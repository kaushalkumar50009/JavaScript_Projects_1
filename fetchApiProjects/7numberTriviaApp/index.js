// const btn = document.getElementById("btn");
// const randomBtn = document.getElementsByClassName("random");
// const result = document.querySelector(".result");

// const apiUrl = `http://numbersapi.com/`;



// async function getWordMeaning() {

//   let inputWord = document.getElementById("word").value;

//   try {
//     const response = await fetch(`${apiUrl}${inputWord}`)
//     const data = await response.text()
//     getData(data)
//     document.getElementById("word").value = ""
//   }
//   catch (e) {
//     result.innerHTML = `<h3> Couldn't Find The Word </h3>`;
//     setTimeout(() => {
//       result.innerHTML = " ";
//     }, 2000);
//     // console.log(e)
//   };
// };

// function getData(triviadata) {
//   let inputWord = document.getElementById("word").value;
//   console.log(inputWord)

//   result.innerHTML = `<h2>${inputWord}</h2> <p>${triviadata}</p>`
//   // document.querySelector(".content").append(result)
// }

// let getFact = () => {
//   let inputWord = document.getElementById("word").value;
//   if (inputWord) {
//     if (inputWord >= 0 && inputWord <= 300) {
//       // getData()
//       getWordMeaning()

//     } else {
//       result.innerHTML = `<h3> Enter Valid Number or less than 300 or greater than 0</h3>`;
//     }
//   } else {
//     result.innerHTML = `<h3> input filed can not be blank</h3>`;
//     setTimeout(() => {
//       result.innerHTML = " ";
//     }, 2000);
//   }

// }

// btn.addEventListener("click", function () {
//   getFact()

// })

const btn = document.getElementById("btn");
const randomBtn = document.querySelector(".random");
const result = document.querySelector(".result");


const apiUrl = `http://numbersapi.com/`;



async function getWordMeaning(num) {
  try {
    const response = await fetch(`${apiUrl}${num}`)
    const data = await response.text()
    getData(data)
  }
  catch (e) {
    result.innerHTML = `<h3> Couldn't Find The Word </h3>`;
    setTimeout(() => {
      result.innerHTML = " ";
    }, 2000);
    // console.log(e)
  };
};

function getData(triviadata) {
  let inputWord = document.getElementById("word").value;
  // console.log(inputWord)

  result.innerHTML = `<h2>${inputWord}</h2> <p>${triviadata}</p>`
  // document.querySelector(".content").append(result)
}

let getFact = () => {
  let inputWord = document.getElementById("word").value;

  if (inputWord) {
    if (inputWord >= 0 && inputWord <= 300) {
      // getData()
      getWordMeaning(inputWord)

    } else {
      result.innerHTML = `<h3> Enter Valid Number or less than 300 or greater than 0</h3>`;
    }
  } else {
    result.innerHTML = `<h3> input filed can not be blank</h3>`;
    setTimeout(() => {
      result.innerHTML = " ";
    }, 2000);
  }

}

btn.addEventListener("click", function () {
  getFact()

})

function randomTrivia() {
  let randomNum = Math.floor(Math.random() * 301)
  getWordMeaning(randomNum)

}
randomBtn.addEventListener("click", randomTrivia)
window.addEventListener("load", randomTrivia)

