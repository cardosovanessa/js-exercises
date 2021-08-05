/* 2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
Formato:
Nome: [nome]
ID: [id]
Região: [area]
Ingredientes: [ingredientes (string única)]
Instruções: [instruções]; */

const fetch = require('node-fetch')

function getIngredientsAsString(meal) {
  let ingredients = [];

  Object.entries(meal).forEach(([key, value]) => {
    if (key.startsWith('strIngredient') && value) {
      ingredients.push(value);
    }
  });

  return ingredients.join(',');
}

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    const meal = data.meals[0];

    console.log({
      Nome: meal.strMeal,
      ID: meal.idMeal,
      Regiao: meal.strArea,
      Ingredientes: getIngredientsAsString(meal),
      Instrucoes: meal.strInstructions,
    });
  })
