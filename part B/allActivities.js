/* 1. Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors:

var getShirtsColorsAmount = function (company) {
  colors = company.products.shirts.colors;
  return colors.length;
}; */

company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};

var getShirtsColorsAmount = (company) => {
  const { products: { shirts: { colors: shirtsColors } } } = company
  return shirtsColors;
};

console.log(getShirtsColorsAmount(company));

// 2. A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​socks:

const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};

const {pants, ...rest} = clothes;

console.log(rest);

// 3. Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro:

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [item1Arr1, ...array1] = arr;
const [item1Arr2, ...array2] = arr2;

const allArr = [...array1, ...array2];

console.log(allArr);

// 4. A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

var completeName = persons.map((elemento) => {
  return elemento.firstname + ' ' + elemento.lastname;
})

console.log(completeName);