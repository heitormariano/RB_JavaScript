//usando a dupla negação (!!) para revelar o tipo booleano de certos valores

console.log(!!0);
console.log(!!NaN);
console.log(!!'');
console.log(!!false);
console.log(!!null);
console.log(!!undefined);

var estudante = true;
if (estudante) {
  console.log('É estudante!');
} else {
  console.log('Não é estudante');
}

var nota = 10;

if (nota) {
  console.log('Existe uma nota');
} else {
  console.log('Não existe uma nota');
}

var nome = 'Heitor';

if (nome) {
  console.log('Existe um nome!');
} else {
  console.log('Não existe um nome');
}

//trabalhando um pouco com obetos
var objTeste = {};
console.log(!!objTeste);

//vendo um pouco de arrays
var arrayShow = [];
console.log(!!arrayShow);
