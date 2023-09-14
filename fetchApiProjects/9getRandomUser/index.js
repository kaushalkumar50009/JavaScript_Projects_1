const textContent = document.getElementById("text_content");
const userDetails = document.getElementById("details")
const imgContainer = document.querySelector(".img_container")
const btn = document.getElementById("btn");

const apiUrl = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    getUserData(data)
    // console.log(data);
  } catch (e) {
    // throw new Error("data not fetch");
    // randomQuotes.innerText = `${e}`;
    console.log(e);
  }
};

btn.addEventListener("click", function () {
  getUser();
});

window.addEventListener("load", getUser)


function getUserData(userInfo) {

  const { first_name, last_name, avatar, employment, address } = userInfo

  // console.log(userInfo)
  // console.log(first_name)
  // console.log(last_name)
  // console.log(avatar)
  // console.log(employment.title)
  // console.log(address.city)

  imgContainer.innerHTML = `<img src=${avatar} alt="random details">`
  userDetails.innerHTML = ` <h2>${first_name} ${last_name}</h2> <h3>${employment.title}</h3> <h4>${address.city}</h4>`


  let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
  document.documentElement.style.setProperty("--theme-color", randomColor)

}