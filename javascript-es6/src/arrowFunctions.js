const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: "Leoni" });

console.log(teste);

// valores padrões
const soma = (a = 3, b = 6) => {
  return a + b;
};

console.log(soma(1));
console.log(soma(9));
