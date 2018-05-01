// function declaration
function somar(a, b) {
  return a + b;
}

resultadoSoma = somar(10, 20);
console.log(somar);
console.log('Soma:' + resultadoSoma);

// function  expression
var soma = function(a, b) {
  return a + b;
};

console.log(soma);
console.log('Nova Soma: ' + soma(10, 30));

// Named Function Expression
var subtracao = function subtracao(a, b) {
  return a - b;
};

console.log('Resultado Subtração: ' + subtracao(20, 10));

// The difference between function declaration and function expression
// The function declaration is loaded before code interpretation. Therefore the invocation order DOES NOT difference
// The function expression is load during the code interpretation. Therefore the invocation order does difference

//It Works
console.log(multiplicar(10, 4));

function multiplicar(a, b) {
  return a * b;
}

// It not works
//console.log(divisao(10, 5));
var divisao = function(a, b) {
  return a / b; // JavaScript allows division by zero (Ex.: 10 / 0. Result: Infinity)
};
//It Works
console.log(divisao(10, 5));
