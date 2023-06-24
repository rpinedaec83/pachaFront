let numero1 = prompt("Ingrese el primer número: ");
let numero2 = prompt("Ingrese el segundo número: ");
let numero3 = prompt("Ingrese el tercer número: ");
let numero4 = prompt("Ingrese el cuarto número: ");
let contadorPares = 0;
let mayor = 0;

if (numero1 % 2 === 0) {
    contadorPares++;
}

if (numero2 % 2 === 0) {
    contadorPares++;
}

if (numero3 % 2 === 0) {
    contadorPares++;
}

if (numero4 % 2 === 0) {
    contadorPares++;
}

if (numero1 > mayor) {
    mayor = numero1;
}

if (numero2 > mayor) {
    mayor = numero2;
}

if (numero3 > mayor) {
    mayor = numero3;
}

if (numero4 > mayor) {
    mayor = numero4;
}

if (numero3 % 2 === 0) {
    console.log("El cuadrado del segundo número es: ", numero2 ** 2);
}

if (numero1 < numero4) {
    console.log("El promedio de los 4 números es: ", (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4)) / 4);
}

if (numero2 > numero3 && numero3 > 50 && numero3 < 700 ) {
    console.log("La suma de los 4 números es: ", (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4)));
}
