/* **3.** Faça fetch dos dados através da API ([https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood](https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood)) e retorne uma lista(array) com os nomes dos primeiros 10 resultados. */

const fetch = require('node-fetch')

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then(
    (res) => {
      return res.json()
        .then((details) => console.log(details.meals.slice(0, 10)));
    }
  );