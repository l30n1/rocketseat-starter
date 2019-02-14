var buttonElement = document.querySelector("#app button");
var inputElement = document.querySelector("#app input");
var listElement = document.querySelector("#app ul");

function getRepos(usuario) {
  renderRepos(["Loading..."]);
  axios
    .get("https://api.github.com/users/" + usuario + "/repos")
    .then(function(response) {
      renderRepos(reponse.data);
    })
    .catch(function() {
      renderRepos(["Usuário não existe!..."]);
    });
}

buttonElement.onclick = function() {
  getRepos(inputElement.value);
  inputElement.value = "";
};

function renderRepos(repos) {
  listElement.innerHTML = "";
  for (var repo of repos) {
    var itemElement = document.createElement("li");
    var textElement = document.createTextNode(repo.name);
    itemElement.appendChild(textElement);
    if (repo.indexOf("Usuário não existe!...") > 0) {
      itemElement.style.color = "#F00";
    }
    listElement.appendChild(itemElement);
  }
}
