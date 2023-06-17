let suma_pares = 0;
let suma_impares = 0;
let contador = 1;
let numero;
let media_pares;
let media_impares;

while (contador <= 10) {
    numero = prompt("Ingrese el número " + contador + ": ");
    numero = parseInt(numero);
    if (numero % 2 == 0) {
        suma_pares = suma_pares + numero;
    } else {
        suma_impares = suma_impares + numero;
    }
    contador = contador + 1;
}

media_pares = suma_pares / 5;
media_impares = suma_impares / 5;

console.log("La media de los números pares es: " + media_pares);
console.log("La media de los números impares es: " + media_impares);
