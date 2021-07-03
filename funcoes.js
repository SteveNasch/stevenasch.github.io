
class Pessoa {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
}

var pessoa;
var ideia;

function mostrarjanela(document){
  document.getElementById('download').style.display='block';
}

function cadastro(nome, idade, email) {
    return new Pessoa(nome, idade, email);
}

function gravar(document){
  document.getElementById('download').style.display='none';
  var ele_nome = document.getElementById("InputNome");
  var ele_idade = document.getElementById("InputIdade");
  var ele_email = document.getElementById("InputEmail");
  var ele_ideia = document.getElementById("InputIdeia");

  pessoa = cadastro(ele_nome.value, ele_idade.value, ele_email.value);
  ideia = ele_ideia.value;  

  document.getElementById("NomePessoa").textContent = pessoa.nome;

  showThanks(document);

}

function showThanks(document) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  var x = document.getElementsByClassName("mySlidesThanks");
  
  x[0].style.display = "block";  
}