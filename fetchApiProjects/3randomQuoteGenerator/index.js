textContent = document.getElementById("text_content");
quoteOwner = document.getElementById("quote_owner");
// randomQuotes = document.querySelector(".random_Quote");
btn = document.getElementById("btn");

const apiUrl = "https://api.quotable.io/random";

let randomQuote = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    //   console.log(data);

    textContent.innerText = `${data.content}`;
    quoteOwner.innerText = `${data.author}`;
  } catch (e) {
    // throw new Error("data not fetch");
    // randomQuotes.innerText = `${e}`;
    console.log(e);
  }
};

btn.addEventListener("click", function () {
  randomQuote();
});

randomQuote();
