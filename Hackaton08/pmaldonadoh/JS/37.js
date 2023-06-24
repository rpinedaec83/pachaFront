let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número:"));
let r;

while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
}

console.log("El MCD de los dos números es:", a);