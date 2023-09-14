const searchBtn = document.getElementById("btn");
const result = document.getElementById("result");


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";




let recipeMenu = async () => {
  let input = document.getElementById("word").value;
  try {
    const response = await fetch(apiUrl + input);
    const data = await response.json();
    // console.log(data.meals)

    showRecipeData(data.meals);
  } catch (e) {
    console.log(e);
    result.innerHTML = "<h4>invalid input</h4>"
  }
};

searchBtn.addEventListener('click', function () {
  recipeMenu()
})


function showRecipeData(datas) {
  // console.log(data)
  let total = datas.map((item) => {
    return `   <div class="img_text">

        <img src=${item.strMealThumb} alt="food images">
        <div class="food_name">
            <h4>${item.strMeal}</h4>
            <p>${item.strArea}</p>
        </div>
    </div>`

  })

  // console.log(total)

  let loadMenu = total.join("")
  // console.log(loadMenu)
  result.innerHTML = loadMenu

}


