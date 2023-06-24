let numero1 = prompt("Ingrese el primer número: ");
let numero2 = prompt("Ingrese el segundo número: ");
let numero3 = prompt("Ingrese el tercer número: ");

if (numero1 > numero2 && numero1 > numero3) {
    console.log("El primer número es el mayor.");
} else if (numero2 > numero3) {
    console.log("El segundo número es el mayor.");
} else {
    console.log("El tercer número es el mayor.");
}