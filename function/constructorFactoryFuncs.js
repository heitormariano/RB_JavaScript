// Constructor functions Vs factory functions

// First: FACTORY functions
var criarPessoa = function(nome, idade) {
  return {
    nome: nome,
    idade: idade
  };
};

var marcos = criarPessoa('Marcos', 33);
var felipe = criarPessoa('Felipe', 40);
console.log(marcos);
console.log(felipe);

var criarAluno = function(nome, curso, instituicao) {
  return {
    nome: nome,
    curso: curso,
    instituicao: instituicao
  };
};

var joao = criarAluno('João', 'Redes', 'IFRN');
var maria = criarAluno('Maria', 'Sistemas', 'IFRN');
console.log(joao);
console.log(maria);

// Second: CONSTRUCTOR functions
var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

var jose = new Pessoa('José', 36);
var amanda = new Pessoa('Amanda', 28);
console.log(jose);
console.log(amanda);

var Fruta = function(nome, cor, forma) {
  this.nome = nome;
  this.cor = cor;
  this.forma = forma;
  this.descrever = function() {
    return 'A fruta ' + this.nome + ' apresenta a cor ' + this.cor + ' e a forma ' + this.forma;
  };
};

var laranja = new Fruta('laranja', 'laranja', 'arredondada');
var melao = new Fruta('melão', 'amarela', 'arredondada');
console.log(laranja);
console.log(laranja.descrever());
console.log(melao);
console.log(melao.descrever());
