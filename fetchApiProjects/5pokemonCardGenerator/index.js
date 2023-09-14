const btn = document.getElementById("btn");
const card = document.getElementById("card");

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#ff0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#009233",
  ground: "#efb549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190ff",
};

const apiUrl = " https://pokeapi.co/api/v2/pokemon/";

let pokemonCard = async () => {
  // generate random number between 1 and 100
  let id = Math.floor(Math.random() * 150) + 1;
  // console.log(id);

  const newApi = apiUrl + id;
  // console.log(newApi);

  try {
    const response = await fetch(newApi);
    const data = await response.json();
    // consol.log(data);
    generateCard(data);
  } catch (e) {
    // throw new Error("data not fetch");
    // randomQuotes.innerText = `${e}`;
    console.log(e);
  }
};

btn.addEventListener("click", function () {
  pokemonCard();
});

let generateCard = (data) => {
  console.log(data);
  // get necessary data and assign it to variables

  const hp = data.stats[0].base_stat;
  const img = data.sprites.other.dream_world.front_default;

  // const pokeName = data.name;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefence = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  // set Theme color based on pokemon Type

  const themeColor = typeColor[data.types[0].type.name];
  // console.log(themeColor);

  card.innerHTML = `
    
      <div class="hp">
        <h4>
          HP
          <span>${hp}</span>
        </h4>
      </div>
      <div class="img_text">
        <img src=${img} alt="image"></img>
        <p class="text">${pokeName}</p>
      </div>
      <div class="power_types">
       
      </div>

      <div class="status">
        <div class="attack">
          <h5>${statAttack}</h5>
          <span>Attack</span>
        </div>
        <div class="defence">
          <h5>${statDefence}</h5>
          <span>Defence</span>
        </div>
        <div class="speed">
          <h5>${statSpeed}</h5>
          <span>Sped</span>
        </div>
      </div>
    `;

  appendTypes(data.types);
  styleCard(themeColor);
};

let appendTypes = (types) => {
  // console.log(types);
  types.forEach(function (item) {
    console.log(item);
    const span = document.createElement("span");
    span.textContent = item.type.name;
    document.querySelector(".power_types").appendChild(span);
  });
};

let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% -18%, ${color} 55%, #fff 59%)`;
  card.querySelectorAll(".power_types span").forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
};

pokemonCard();
