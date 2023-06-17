let subtotal = parseInt(prompt("Ingrese el subtotal de la compra:"));
let membresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
let total;

switch (membresia) {
  case "A":
    total = subtotal - subtotal * 0.1;
    break;
  case "B":
    total = subtotal - subtotal * 0.15;
    break;
  case "C":
    total = subtotal - subtotal * 0.2;
    break;
  default:
    console.log("El tipo de membresía ingresado no es válido.");
    break;
}

if (total !== undefined) {
  console.log(`El total a pagar con descuento es: ${total}`);
}
