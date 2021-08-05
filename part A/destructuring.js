//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código:

function handleMouseMove(event) {
  const [clientX, clientY] = event 
  console.log(clientX, clientY);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring:

const obj = { first: 'Jane', last: 'Doe' };
const {first} = obj;

console.log(first);
