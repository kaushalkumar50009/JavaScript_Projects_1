const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

let lodar = document.querySelector(".item_container")
let btns = document.querySelector(".btn_container")

window.addEventListener("DOMContentLoaded", function () {
  // console.log("hii")
  displayMenu(menu)

  filterItemCategory()
})

function displayMenu(accessMenu) {
  let menuItems = accessMenu.map(function (items) {
    const { title, price, img, desc } = items

    // console.log(items)
    return `<div class="menu_item">
    <div class="img">
        <img src="${img}" alt="meal_image">
    </div>

    <div class="text_content">
        <div class="menu_name_price">
            <div class="item_name">
                <h3>${title}</h3>
            </div>
            <div class="item_price">
                <p>$ ${price}</p>
            </div>
        </div>

        <div class="menu_details">
            <p class="check" id="p">
                ${desc}
            </p>
        </div>

    </div>

</div>`
  })
  // console.log(menuItems)
  let loadMenu = menuItems.join("")
  // console.log(loadMenu)
  lodar.innerHTML = loadMenu
}

function filterItemCategory() {
  // // let uniqueItem = menu.map(function () {
  // //   return item
  // // })
  let uniqueItem = menu.reduce(
    function (value, items) {
      if (!value.includes(items.category)) {
        value.push(items.category)
      }
      // console.log(value)
      // console.log(items)
      return value
    },
    ["all"]
  )

  const catbtn = uniqueItem
    .map(function (uniitems) {
      return ` <button class="filter_btn" data-id="${uniitems}" type="button">${uniitems}</button>`
    })
    .join("")
  btns.innerHTML = catbtn


  let filterBtn = document.querySelectorAll(".filter_btn")
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.id)
      let dataId = e.currentTarget.dataset.id
      let selectedItem = menu.filter(function (filteredItem) {
        // console.log(filteredItem.category)
        if (filteredItem.category === dataId) {
          return filteredItem
        }
      })
      if (dataId === "all") {
        displayMenu(menu)
      } else {
        displayMenu(selectedItem)
      }
      // console.log(selectedItem)
    })
  })

  // // console.log(catbtn)
}
