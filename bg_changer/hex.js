const hex_code = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"]

const btn = document.getElementById("btn")
const color = document.querySelector(".hex_code")

btn.addEventListener("click", function () {
  console.log(changeColor())

  let hex_color = "#"
  for (let i = 0; i < 6; i++) {
    // hex_color += hex_code[5]
    hex_color += hex_code[changeColor()]
  }

  color.innerText = hex_color
  document.body.style.backgroundColor = hex_color
})

const changeColor = () => {
  return Math.floor(Math.random() * hex_code.length)
}
