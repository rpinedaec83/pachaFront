let cantidad = prompt("¿Cuantas unidades de CDs compraste?");
let total = 0;

if (cantidad > 0 && cantidad < 10) {
    total = cantidad * 10;
} else if (cantidad >= 10 && cantidad <= 99) {
    total = cantidad * 8;
} else if (cantidad >= 100 && cantidad <= 499){
    total = cantidad * 7;
} else {
    total = cantidad * 6;
}