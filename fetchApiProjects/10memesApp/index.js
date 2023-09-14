textContent = document.getElementById("text_content");
meme = document.getElementById("meme");

// randomQuotes = document.querySelector(".random_Quote");
btn = document.getElementById("btn");

const apiUrl = "https://meme-api.com/gimme/";


let randomMemes = async () => {

  let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"]

  let random = subreddits[Math.floor(Math.random() * subreddits.length)]
  try {
    const response = await fetch(apiUrl + random);
    const data = await response.json();

    // console.log(data);
    getmemes(data)

  } catch (e) {
    // throw new Error("data not fetch");
    // randomQuotes.innerText = `${e}`;
    console.log(e);
  }
};

btn.addEventListener("click", function () {
  randomMemes();
});
window.addEventListener("load", function () {
  randomMemes();
});



function getmemes(memesData) {
  // console.log(memesData);
  let memeImg = new Image()
  //Display meme image title only after the image loads
  memeImg.onload = () => {
    meme.src = memesData.url
    textContent.innerHTML = memesData.title

  }
  memeImg.src = memesData.url

}


