//difference between 'undefined' and 'null'
//undefined = It is returned if a propertie of a given object is queried and does not exist
//null = It indicates simply the absence of value in a given existing property

var pessoa = {};
console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.nome = 'Jose';
pessoa.idade = 35;

console.log(pessoa);
console.log('Nome:' + pessoa.nome);
console.log('Idade:' + pessoa.idade);

//searching oobject properties
console.log('Imprimindo propriedades de um objeto');
for (var propriedade in pessoa) {
  console.log(propriedade);
}

//assigning the undefined value to one of the object's properties
console.log('Atribundo undefined como valor da propriedade idade');
pessoa.idade = undefined;

console.log(pessoa.nome);
console.log(pessoa.idade);

for (var prop in pessoa) {
  console.log(prop);
}
console.log(pessoa);

console.log('atribuindo null para a propriedade idade');
pessoa.idade = null;
console.log(pessoa);
for (var propriedade in pessoa){
  console.log(propriedade);
}
console.log(pessoa.nome);
console.log(pessoa.idade);
