let n = parseInt(prompt("Ingrese la cantidad de términos a utilizar:"));
let pi = 0;
let signo = 1;
let denominador = 1;

for (let i = 1; i <= n; i++) {
    pi = pi + signo * (4 / denominador);
    signo = signo * -1;
    denominador = denominador + 2;
}

console.log("El valor aproximado de pi con", n, "términos es:", pi);
