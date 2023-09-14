const searchbar = document.getElementById("text");
const btn = document.getElementById("searchBtn");
const errors = document.querySelector(".err")
const cardContainer = document.querySelector(".card_container")


searchbar.addEventListener("input", () => {
    if (searchbar.value.trim() === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});

async function fetchData() {
    const searchValue = searchbar.value
    let url = `http://www.omdbapi.com/?apikey=4b372ea3&s=${searchValue}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.Response === "True") {
            displayFetchedData(data);
            errors.textContent = ""; // Clear any previous error message
        } else {
            cardContainer.innerHTML = ""; // Clear the card container
            errors.textContent = "Sorry! No results found for your search..."; // Display the error message
        }
        displayFetchedData(data)
        // console.log(data);
    } catch (err) {
        console.log(err)
    }
}

const displayFetchedData = (data) => {
    // console.log(data)
    const searchedData = data.Search
    const display = searchedData.map((items) => {
        const { Title, Poster, Actors } = items

        return `  <div class="card">
        <div class="image">
            <img src=${Poster} alt="hi" class="img">
        </div>
        <div class="title">
            <p class="title_text">
                ${Title}
            </p>
        </div>
        <button class="show_movie_btn" id="btn">show movie</button>
    </div>`
    }).join(" ")

    cardContainer.innerHTML = display
}

// search on click 
// btn.addEventListener('click', async (e) => {
//     fetchData();
// })

searchbar.addEventListener('input', async (e) => {
    fetchData();
})







