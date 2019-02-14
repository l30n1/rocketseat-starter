const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = usuarios.map(item => {
  return item.idade;
});

console.log(idades);

const trabalhadores = usuarios.filter(
  item => item.idade > 18 && item.empresa === "Rocketseat"
);

console.log(trabalhadores);

const google = usuarios.find(item => item.empresa === "Google");

console.log(google);

const maisVelhos = usuarios
  .map(item => ({ ...item, idade: item.idade * 2 }))
  .filter(item => item.idade < 50);

console.log(maisVelhos);
