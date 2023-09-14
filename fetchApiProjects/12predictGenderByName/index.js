const btn = document.getElementById("btn");
const result = document.getElementById("result");
const error = document.getElementById("error");


const apiUrl = `https://api.genderize.io?name=`;


let predictGender = async () => {

  const input = document.getElementById("word").value;

  result.innerHTML = " "
  // console.log(input)

  // check if input field is not empty and the entered name does not contain anything but alphabet

  if (input.length > 0 && /^[A-Za-z]+$/.test(input)) {


    try {
      const response = await fetch(apiUrl + input);
      const data = await response.json();
      console.log(data);

      let div = document.createElement("div")
      div.setAttribute("id", "info")
      div.innerHTML = `<h2 id="result_name">${data.name}</h2>
      <img src="" id="gender-icon"/>
      <h1 id="gender">${data.gender}</h1>
      <h4 id="prob">probability: ${data.probability}</h4>`
      result.append(div)



      if (data.gender == "female") {
        div.classList.add("female")
        document.getElementById("gender-icon").setAttribute("src", "female.svg")
      } else {
        document.getElementById("gender-icon").setAttribute("src", "male.svg")
      }

    } catch (e) {
      console.log(e);
    }



  } else {
    error.innerHTML = `enter a valid name with no space`
  }

  document.getElementById("word").value = ""

};

btn.addEventListener("click", function () {
  predictGender();
});

window.addEventListener("load", function () {
  predictGender();
});

// getCountry();
