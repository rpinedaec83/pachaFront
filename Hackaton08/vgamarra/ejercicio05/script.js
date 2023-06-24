var numerodezapatos = 0;
const descuentodiez = 0.1;
const limitediez = 10;
const limiteveinte = 20;
const limitetreinta = 30;
const descuentoveinte = 0.2;
const descuentocuarenta = 0.4;
const preciocadazapato = 80;
numerodezapatos = prompt("por favor ingrese el numero de zapatos");
console.log(numerodezapatos)
var descuentoelegido = 0;
if (numerodezapatos > limitediez) {
    descuentoelegido = descuentodiez;
}
console.log(descuentoelegido)
if (numerodezapatos > limiteveinte && numerodezapatos < limitetreinta) {
    descuentoelegido = descuentoveinte;
}
console.log(descuentoelegido)
if (numerodezapatos > limitetreinta) {
    descuentoelegido = descuentocuarenta;
}
console.log(descuentoelegido)
var preciototal = 0
preciototal = preciocadazapato * numerodezapatos;
console.log(preciototal)
preciototal = preciototal*(1-descuentoelegido)

console.log(preciototal)















//prueba1 numero mayor de 10 es 10%de descuento
//prueba2 numero mayor de 20 es 20%de descuento
//prueba3 numero mayor de 30 es 40%de descuento