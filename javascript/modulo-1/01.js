// Exercício numero 1

function retornaEndereco(endereco) {
  console.log(
    "O usuário mora" +
      endereco.rua +
      " / " +
      endereco.uf +
      ", no bairro " +
      endereco.bairro +
      ', na rua "' +
      endereco.rua +
      '" com nº ' +
      endereco.numero +
      "."
  );
}

var endereco = {
  rua: "Rua dos Pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

retornaEndereco(endereco);
