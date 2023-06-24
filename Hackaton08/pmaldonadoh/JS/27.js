let suma = 0;
let cantidad = 0;
let numero = 0;

while (numero >= 0) {
    numero = prompt("Ingrese un número positivo (o un número negativo para terminar): ");
    numero = parseInt(numero);
    if (numero >= 0) {
        suma = suma + numero;
        cantidad = cantidad + 1;
    }
}

media = suma / cantidad;

console.log("La media de los números ingresados es: " + media);
