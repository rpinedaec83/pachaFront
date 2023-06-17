let cantidad = parseInt(prompt("Ingrese la cantidad de zapatos a comprar:"));
let precio = 80;
let total = cantidad * precio;
let descuento = 0;
if (cantidad > 30) {
  descuento = total * 0.4;
} else if (cantidad > 20) {
  descuento = total * 0.2;
} else if (cantidad > 10) {
  descuento = total * 0.1;
}
total = total - descuento;
console.log(`El total de la compra es: ${total}`);
