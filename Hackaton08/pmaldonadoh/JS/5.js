let cantidad = prompt("Ingrese la cantidad de zapatos que compró: ");
let subtotal = parseInt(cantidad * 80);
let dcto = 0;

if (cantidad > 10 && cantidad < 20) {
    dcto = subtotal * 0.10;
} else if (cantidad > 20 && cantidad < 30){
    dcto = subtotal * 0.20;
} else if (cantidad > 30){
    dcto = subtotal * 0.40;
} else {
    dcto = 0
}

let total = subtotal - dcto;

console.log ("El total a pagar es: $" + total);