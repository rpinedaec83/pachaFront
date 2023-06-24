let suma = 0;
let contador = 1;

do {
    suma = suma + contador;
    contador = contador + 1;
} while (contador <= 100);

console.log("La suma de los primeros 100 números es: " + suma);
