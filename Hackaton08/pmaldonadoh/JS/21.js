let numero = prompt("Ingrese un número: ");
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
}

console.log("El factorial de " + numero + " es: " + factorial);
