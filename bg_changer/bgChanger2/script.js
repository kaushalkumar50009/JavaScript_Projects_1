const changeColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  //   console.log(randomNumber);

  const randomCode = "#" + randomNumber.toString(16);
  //   console.log(randomCode);

  document.body.style.backgroundColor = randomCode;

  document.getElementById("colorCode").innerText = randomCode;

  navigator.clipboard.writeText(randomCode);
};

let btn = document.getElementById("btn");
btn.addEventListener("click", changeColor);

// setInterval(() => {
//   changeColor()
// }, 100);
changeColor();


// easy way to write the previoius code 


const generateColor = () => {

  //tostring convert the number into string and 16 is the value of color code 0-9 and a-f addition of number and alphabet
  // it will return the value in decimal
  // const randomColor = Math.random().toString(16)

  //substring = to remove the decimal part we use substring method 2 is the starting point and one is the ending point
  randomColor = Math.random().toString(16).substring(2, 8)

  document.body.style.backgroundColor = "#" + randomColor;
  document.getElementById("colorCode").innerText = "#" + randomColor;
}

