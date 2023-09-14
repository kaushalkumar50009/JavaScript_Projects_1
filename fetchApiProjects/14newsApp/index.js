import { key } from "./apiKey.js"



const allButton = document.querySelector(".all_button")
const content = document.querySelector(".content__item")



const country = "in"
const options = ["general",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"]


// 100 request per day
let requestURL;


const generateUi = (articles) => {
    for (let item of articles) {
        const card = document.createElement("div")
        card.classList.add("news-card")
        card.innerHTML = `<div class="news-image-container">
            <img src="${item.urlToImage || './item-6.jpeg'} " alt="" />
        </div>
        <div class="news-content">
            <div class="news-title">
                ${item.title}
            </div>
            <div class="news-discription">
                ${item.description || item.content || ""}
            </div>
            <a href="${item.url}" target="blank" class="view-button">Read more</a>

        </div>`

        content.appendChild(card)
    }
}

// News Api Call
const getNews = async () => {

    content.innerHTML = " "

    let response = await fetch(requestURL)
    if (!response.ok) {
        alert("Data unavailable at the moment. please try again leter")
        return false
    }
    let data = await response.json()
    // console.log(data.articles[0])

    generateUi(data.articles)
}


// category selection


const init = () => {
    // allButton.innerHTML = ""
    getNews()
    createOptions()
}

window.onload = () => {
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${key}`
    init()
}


