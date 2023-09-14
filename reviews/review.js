const data = [
  {
    id: 1,
    name: "John Smith",
    job: "web dev",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0OMAWXKIBJR9RGyLvoC-d08BMsGIFPI6qg&usqp=CAU",
    text: "Lorem ipsum ",
  },
  {
    id: 2,
    name: "kaushal",
    job: "web dev",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WyHQZomYuKHtx8DB6l4apLubyL4XlvAMgQ&usqp=CAU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    id: 31,
    name: "John ",
    job: "web dev",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLMkdqbGnaxIxu0L85bTJkqP7YKWSMq35hw&usqp=CAU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus n",
  },
  {
    id: 41,
    name: " Smith",
    job: "web dev",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4_LmN5MlGYXa1tKpDGJkhmgbip3aW58R6w&usqp=CAU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus natus perferend incidunt tempore repellendus .",
  },
];

// References to HTML elements
const img = document.getElementById("img");
const author = document.getElementById("author");
const work = document.getElementById("work");
const disc = document.getElementById("disc");

const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("prev_btn");
const randomBtn = document.getElementById("random_btn");

// Initialize the current item
let currentItem = 0;

// Function to display person details
const personDetails = () => {
  const loadData = data[currentItem];

  // Update HTML elements with the data
  img.src = loadData.img;
  author.innerText = loadData.name;
  work.innerText = loadData.job;
  disc.innerText = loadData.text;
};

// Event listeners for navigation buttons
nextBtn.addEventListener("click", function () {
  if (currentItem < data.length - 1) {
    currentItem++;
  } else {
    currentItem = 0;
  }
  personDetails();
});
prevBtn.addEventListener("click", function () {
  if (currentItem > 0) {
    currentItem--;
  } else {
    currentItem = data.length - 1;
  }
  personDetails();
});
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * data.length);
  personDetails();
});

// Initial display of the first person's details
(function () {
  personDetails();
})();
