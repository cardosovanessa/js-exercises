// Arrays e seus métodos
// A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array:

var numbers = [4, 9, 16, 25];

var squareNumbers = numbers.map((num) => {
  return Math.sqrt(num)
});

console.log(squareNumbers);

// A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function:

var numbers = [65, 44, 12, 4];

var multiplyNumbers = numbers.map((num) => {
  return num * 10;
});

console.log(multiplyNumbers);

// A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter:

var ages = [32, 33, 16, 40];

var adultAges = ages.filter((age) => {
  return age >= 18
});

console.log(adultAges);

// A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter:

data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },

  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
];

const dogs = data
    .filter((animals) => { return animals.type === 'dog' })
    .map((dog) => {return dog.name});

console.log(dogs);