var numeros = [];
numeros.push(+prompt("ingrese numero"));
numeros.push(+prompt("ingrese numero"));
numeros.push(+prompt("ingrese numero"));
console.log(numeros)
var numerosordenados = numeros.sort(ordenarAscendente)
console.log(numerosordenados)

function ordenarAscendente(a, b) {
    return a - b;

}