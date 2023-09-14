const input = document.getElementById("word");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

let getCountry = async () => {
  const apiUrl = `https://restcountries.com/v3.1/name/${input.value}?fullText=true`;
  // const apiUrl = `https://restcountries.com/v3.1/name/china?fullText=true`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data[0]);
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
    // console.log(
    //   Object.values(data[0].languages).toString().split(",").join(",")
    // );

    result.innerHTML = `   <div class="result" id="result">
    <div class="flag_name">
        <div class="flag">
             <img src=${data[0].flags.png} alt="flags">
        </div>
        <div class="name">
        ${data[0].name.common}
        </div>
    </div>

    <div class="country_info">
        <p>
            capital : <span>${data[0].capital}</span>
        </p>
        <p>
            Continent : <span>${data[0].continents}</span>
        </p>
        <p>
            population : <span>${data[0].population}</span>
        </p>
        <p>
            Currency : <span>${
              data[0].currencies[Object.keys(data[0].currencies)].name
            } - ${
      data[0].currencies[Object.keys(data[0].currencies)].symbol
    }</span>
        </p>
        <p>
            Common Languages : <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(",")}</span>
        </p>
    </div>

  </div>`;
  } catch (e) {
    console.log(e);
  }
};

btn.addEventListener("click", function () {
  getCountry();
});

// getCountry();
