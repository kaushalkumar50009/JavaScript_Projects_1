const content = document.getElementById("text_content");
const btn = document.getElementById("btn");

const apiUrl =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async () => {
  await fetch(apiUrl)
    .then((res) => res.json())


    .then((data) => {
      console.log(data);

      content.innerHTML = `${data.joke}`;
    });

};

btn.addEventListener("click", function () {
  getJoke();
});


getJoke();

// (async function () {
//   await fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// })();

function kau(bab) {
  return a
}

kau(23)