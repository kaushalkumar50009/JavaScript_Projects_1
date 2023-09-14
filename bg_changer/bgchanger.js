const colors = [
  "red",
  "green",
  "blue",
  "#ffffff",
  "#f15025",
  "rgba(133,122,200)",
]

const btn = document.getElementById("btn")
const color = document.querySelector(".normal_code")

btn.addEventListener("click", function () {
  //   const randomColor = 1
  //   document.body.style.color = colors[randomColor]
  //   console.log(document.body)
  //   console.log(changeColor())

  const randomColor = changeColor()
  // document.body.style.backgroundColor = "blue"

  document.body.style.backgroundColor = colors[randomColor]

  color.innerText = colors[randomColor]
})

let changeColor = () => {
  //   console.log(Math.random())
  return Math.floor(Math.random() * colors.length)
}
