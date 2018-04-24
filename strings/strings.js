var nome = "Heitor";

console.log('Caracter na posição 2 da string: ' + nome.charAt(2));
console.log('Código do caracter que está na posição 0: ' + nome.charCodeAt(0));
console.log('Concatenando Strings: ' + nome.concat(' Mariano'));
console.log('Índice da primeira ocorrêcia do caracter "e": ' + nome.indexOf('e'));
console.log('Retorando o tamanho da String: ' + nome.length);

nome = 'Heitor Teste';
console.log('Realizando a substituição de Strings: ' + nome.replace('Teste', 'Mariano'));

var materias = 'Portugues;Matematica;Ingles;Fisica;Quimica,Historia,Geografia';
console.log('Dividindo a Strng: ' + materias.split(';'));

var frase = 'Frase de teste para aprender JS';
console.log(frase.substring(0, 5));
console.log('Informando apenas o índice inicial para a substing: ' + frase.substring(9));

var palavra = 'JavaScript';
console.log('Nova String com letras maiúsculas: ' + palavra.toUpperCase());

palavra = palavra.toUpperCase();
console.log('Nova String com letras minúsculas: ' + palavra.toLowerCase());

var novaFrase = '      Teste com o método trim()        ';
console.log('Eliminando espaços em branco no início e no fim da String: ' + novaFrase.trim());

novaFrase = novaFrase.trim();
console.log('Uso do método match():');
console.log(novaFrase.match('método'));
