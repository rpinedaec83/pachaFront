let cantidad = parseFloat(prompt("Ingrese la cantidad de CDs a vender:"));
let precio, ganancia;
if (cantidad <= 9) {
    precio = cantidad * 10;
} else if (cantidad <= 99) {
    precio = cantidad * 8;
} else if (cantidad <= 499) {
    precio = cantidad * 7;
} else {
    precio = cantidad * 6;
}
ganancia = precio * 0.0825;
console.log("El precio total para el cliente es: " + precio);
console.log("La ganancia para el vendedor es: " + ganancia);
