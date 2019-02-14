function experiencia(anos) {
  if (anos >= 7) {
    return "Jedi Master!";
  } else if (anos > 3) {
    return "Avançado!";
  } else if (anos > 1) {
    return "Intermediario!";
  } else {
    return "Iniciante!";
  }
}

var anos = 7;
console.log(experiencia(anos));
