const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  idade,
  endereco: { cidade, estado }
} = usuario;

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);
