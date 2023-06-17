var valorcompra= 0
valorcompra = prompt("ingrese su valor de compra");
var tipomembresia = "";
tipomembresia = prompt("escriba su tipo de membresia");
console.log(valorcompra);
console.log(tipomembresia);
var descuentoelegido =0
if (tipomembresia == "A") {
    descuentoelegido = 0.1;
}
console.log(descuentoelegido)
if (tipomembresia == "B") {
    descuentoelegido = 0.15;
}
console.log(descuentoelegido)
if (tipomembresia == "C") {
    descuentoelegido = 0.2;
}
console.log(descuentoelegido)
var preciototal= 0
preciototal = valorcompra*(1-descuentoelegido);
console.log(preciototal)
