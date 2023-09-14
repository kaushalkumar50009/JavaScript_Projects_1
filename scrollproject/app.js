//  element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled  vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - a nuber representing the top position of the element in pixels

// ! set date

const date = document.querySelector(".date")
let getYear = new Date().getFullYear()
date.innerText = getYear

// ? close links

const toogleBar = document.querySelector(".nav_toogle")
const linkContainer = document.querySelector(".nav_menu_item")
const toogleLink = document.querySelector(".toogle_link")

toogleBar.addEventListener("click", function () {
  linkContainer.classList.toggle("show_toogle")

  //   const containerSize = linkContainer.getBoundingClientRect().height
  //   const linksHeight = toogleLink.getBoundingClientRect().height
  //   if (containerSize.style.height === 0) {
  //     linksHeight.style.height = `${linksHeight}px`
  //   } else {
  //     linksHeight.style.height = 0
  //   }
  //   console.log(containerSize)
  //   console.log(linksHeight)
})

// ! fixed navbar

// ? smooth scroll
// select links
