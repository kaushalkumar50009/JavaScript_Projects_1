const btn = document.getElementById("btn");
const result = document.querySelector(".result");

const inputValue = document.getElementById("word")

const key = "0fb6e443eb04631745bae25acc8bbd31"



async function getWordMeaning() {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`;

  if (inputValue.value === "") {
    result.innerHTML = `<h3>please enter the city</h3>`
  } else {
    document.getElementById("word").value = ""
    try {
      const response = await fetch(`${apiUrl}`)
      const data = await response.json()
      getData(data)
    }
    catch (e) {
      result.innerHTML = `<h3>can not find the city</h3>`
      // console.log(e)
      // throw new Error(Message = "not found")

    };

  }

};




function getData(weatherData) {
  // console.log(weatherData)
  result.innerHTML = `           <div class="state_country">
  <h3>
      ${weatherData.name}
  </h3>
</div>
<div class="weather_condition">
<p>
    ${weatherData.weather[0].main}
</p>
  <p>
      ${weatherData.weather[0].description}
  </p>

</div>
<div class="weather_img">
  <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
</div>
<div class="temperature">
${weatherData.main.temp} &#176
</div>
<div class="min_max_temperature">
  <div class="min">
      <p>
          min
      </p>
      <span>
         ${weatherData.main.temp_min}&#176
      </span>
  </div>
  <div class="max">
      <p>
          max
      </p>
      <span>
          ${weatherData.main.temp_max}&#176
      </span>
  </div>
</div>`

}


// // getData()

// btn.addEventListener("click", getWordMeaning)
// window.addEventListener("load", getWordMeaning)



function handleButtonClickAndKey(event) {
  if (event.type === "click" || event.key === "Enter") {
    getWordMeaning();
  }
  console.log(event);
}

btn.addEventListener("click", handleButtonClickAndKey);
window.addEventListener("load", getWordMeaning);
