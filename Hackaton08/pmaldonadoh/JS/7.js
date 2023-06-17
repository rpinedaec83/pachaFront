let tipo = prompt("Ingrese el tipo de membresía (A, B o C):");
let consumo = parseFloat(prompt("Ingrese el monto total de su compra:"));
let descuento, total_compra;

if (tipo === "A") {
    descuento = consumo * 0.1;
} else if (tipo === "B") {
    descuento = consumo * 0.15;
} else if (tipo === "C") {
    descuento = consumo * 0.2;
} else {
    console.log("El tipo de membresía ingresado es inválido.");
}

total_compra = consumo - descuento;

console.log("El descuento aplicado es de:", descuento, "pesos.");
console.log("El total de su compra es de:", total_compra, "pesos.");
