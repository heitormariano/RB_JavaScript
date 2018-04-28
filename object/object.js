var pessoa = {};
console.log(pessoa);
console.log(typeof(pessoa));

pessoa.nome = "Joao";
pessoa.idade = 20;
console.log(pessoa);

var professor = {
  nome: "Carlos",
  sobrenome: "Fernandes",
  instituicao: "IFRN"
};

console.log('Dados Professor');
console.log('Nome: ' + professor["nome"]);
console.log('Sobrenome: ' + professor["sobrenome"]);
console.log('Intituição: ' + professor["instituicao"]);

//Using lists
var lista = [pessoa, professor];
console.log(lista[0]);
console.log(lista[1]);

var novaPessoa = {
  nome: null,
  idade: null
};
console.log(novaPessoa);

console.log("\n");

for (var elem in lista) {
  var objeto = lista[elem];
  for (var prop in objeto) {
    resultado = "";
    if (objeto.hasOwnProperty(prop)) {
      resultado += prop + " = " + objeto[prop] + "\n";
      console.log(resultado);
    }
  }
}

var carro = {};
carro["cor"] = "vermelho";
carro["ano de fabricacao"] = 2018;
carro["Marca"] = "Ford";
carro["modelo"] = "Ka Sedan";

for (var prop in carro) {
  if (carro.hasOwnProperty(prop)) {
    console.log(prop + " -> " + carro[prop]);
  }
}
console.log('Objeto Carro');
console.log(carro);

var funcionario = {};
funcionario.nome = "Marcos";
funcionario.setor = "Compras";
funcionario.chefe = "Antonio";
funcionario.endereco = {};
funcionario.endereco.rua = "Rua A";
funcionario.endereco.numero = 1234;
funcionario.endereco.cidade = "Parnamirim";

funcionario["endereco"]["bairro"] = "Nova Parnamirim";

console.log('Objeto Funcionario');
console.log(funcionario);
console.log(funcionario["nome"]);
console.log(funcionario.nome);
console.log(funcionario["setor"]);
console.log(funcionario.setor);

console.log('Objeto Fruta');
var fruta = {};
fruta.nome = "maçã";
fruta.cor = "vermelho";
fruta.forma = undefined;

for (var prop in fruta) {
  console.log(prop + " = " + fruta[prop]);
}
delete fruta.forma;
console.log(fruta);
