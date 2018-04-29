// The function invocation directly in the global scope
var somarTresNums = function(a, b, c) {
  return a + b + c;
};

console.log(somarTresNums(1, 2, 3));

// Passing  function as a parameter
var produto = {
  nome: 'Sapato',
  preco: 150
};

var calcularImpostoA = function(preco) {
  return preco * 0.1;
};
var calcularImpostoB = function(preco) {
  return preco * 0.2;
};

var calculaPrecoProduto = function(produto, calcularImposto) {
  return produto.preco + calcularImposto(produto.preco);
};

console.log('Valor do Produto: ' + calculaPrecoProduto(produto, calcularImpostoA));
console.log('Valor Novo do Produto: ' + calculaPrecoProduto(produto, calcularImpostoB));

// Returning a Function
var helloWorld = function() {
  return function() {
    return 'Hello World!';
  };
};

console.log(helloWorld); // [Function: helloWorld]
console.log(helloWorld()); // [Function]
console.log(helloWorld()()); // Hello World!

// Calling a function through an object

// Using a function as a method declared inside the object
var pessoa = {
  nome: 'Lucas',
  sobrenome: 'Andrade',
  idade: 30,
  getIdade: function() {
    return this.idade;
  },
  getNomeCompleto: function() {
    return this.nome + " " + this.sobrenome;
  }
};

console.log('Idade pessoa: ' + pessoa.getIdade());
console.log('Nome completo pessoa: ' + pessoa.getNomeCompleto());

// Another way to use a function as a method in an object
var obterIdade = function() {
  return this.idade;
};

var funcionario = {
  nome: "joao",
  idade: 38,
  getIdade: obterIdade
};

console.log("Idade funcionário: " + funcionario.getIdade());

// Using apply and call
var getCurso = function() {
  return this.curso;
};

var aluno = {
  nome: 'Pedro',
  curso: 'Redes de Computadores',
  matricula: '12.3456-78',
  getCurso: getCurso
};

console.log(aluno.curso);
console.log(aluno.getCurso());
console.log(getCurso.call(aluno)); // functionName.call(scope)

var calcularSalario = function(comissao) {
  return this.salarioBase + comissao;
};

var vendedor = {
  nome: 'Fabio',
  idade: 34,
  salarioBase: 1200,
  calcularSalario: calcularSalario
};

console.log('Salario Final: ' + vendedor.calcularSalario(1000));
console.log('Salario Final: ' + calcularSalario.call(vendedor, 1000)); // functionName(scope, argument01, argument02...)
console.log('Salario Final: ' + calcularSalario.apply(vendedor, [1000])); // functionName(scope, [argument01, argument02...])
