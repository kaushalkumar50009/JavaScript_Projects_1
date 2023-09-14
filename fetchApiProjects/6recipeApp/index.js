const searchBtn = document.getElementById("btn");
const result = document.getElementById("result");


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let recipeMenu = async () => {
  let input = document.getElementById("word").value;
  try {
    const response = await fetch(apiUrl + input);
    const data = await response.json();

    showRecipeData(data);
  } catch (e) {
    // console.log(e);
    result.innerHTML = "<h4>invalid input</h4>"
  }
};

searchBtn.addEventListener("click", function () {
  let input = document.getElementById("word").value;

  if (input === "") {
    result.innerHTML = `<h3>Input field can not be empty</h3>`;
  } else {
    recipeMenu();
    input.value = ""
    // document.getElementById("word").value = ""

  }


});


const showRecipeData = (items) => {
  // console.log(items);
  // Get a random meal from the items.meals array
  const randomIndex = Math.floor(Math.random() * items.meals.length);
  let myMeal = items.meals[randomIndex];


  let count = 1;
  let ingredients = [];
  for (let i in myMeal) {
    // console.log(i)
    // console.log(myMeal[i])
    let ingredient = " ";
    let measure = "";
    if (i.startsWith("strIngredient") && myMeal[i]) {
      ingredient = myMeal[i];
      measure = myMeal[`strMeasure` + count];
      count += 1;
      ingredients.push(`${measure} ${ingredient}`);
    }
  }


  result.innerHTML = `
    <div class="img_text">

          <img src=${myMeal.strMealThumb} alt="food images">
          <div class="food_name">
              <h4>${myMeal.strMeal}</h4>
              <p>${myMeal.strArea}</p>
          </div>
        </div>
      <div class="recipe_steps">
      <ul id="items_list">

      </ul>
      </div>

      <div id="recipe">
      <div class="hide_details" id="hide_details">
        <button class="btn">Hide recipe</button>
      </div>
      <div id="instructions">${myMeal.strInstructions}</div>
    </div>

      <div class="details_button" id="show_details">
          <button class="btn " >view Recipe</button>
      </div>

      `;


  // let recipeStep = document.getElementsByClassName("recipe_step");
  let parent = document.getElementById("items_list");
  // let parent = document.createElement("ul")
  let hideRecipe = document.getElementById("hide_details");

  let showRecipe = document.getElementById("show_details");

  ingredients.forEach((i) => {
    let child = document.createElement("li");
    child.innerText = i;
    parent.appendChild(child);
    // recipeStep.parent.appendChild(child)
  });


  showRecipe.addEventListener("click", function () {
    recipe.style.display = "block";
  });


  hideRecipe.addEventListener("click", function () {
    recipe.style.display = "none";
  });


};




