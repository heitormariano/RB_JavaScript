var valor = 10;

document.getElementById("numeroPuro").innerHTML = valor;
document.getElementById("exponencial").innerHTML = valor.toExponential(2);
document.getElementById("fixado").innerHTML = valor.toFixed(2);
document.getElementById("convertido").innerHTML = valor.toString();
document.getElementById("retornoValor").innerHTML = valor.valueOf();
