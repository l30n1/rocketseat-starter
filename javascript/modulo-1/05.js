function listarUsuarios(usuarios) {
  for (var user of usuarios) {
    console.log(
      "O " +
        user.nome +
        " possui as habilidades: " +
        user.habilidades.join(", ") +
        "."
    );
  }
}

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

listarUsuarios(usuarios);
