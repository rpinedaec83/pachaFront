let n = parseInt(prompt("Ingrese la cantidad de términos a utilizar:"));
let pi = 3;
let signo = 1;
let numerador = 4;
let denominador = 2;

for (let i = 1; i <= n; i++) {
    pi = pi + signo * (numerador / denominador);
    signo = signo * -1;
    numerador = numerador * numerador;
    denominador = denominador * (denominador + 1) * (denominador + 2);
}

console.log("El valor aproximado de pi con", n, "términos es:", pi);
