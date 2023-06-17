let horas = prompt("Ingresa las cantidad de horas que trabajaste: ");
let pago = 0;
let extra = 0;

if (horas <= 40) {
    pago = horas * 20;
} else {
    extra = horas - 40;
    pago = ((horas - extra) * 20) + (extra * 25);
}

console.log ("Tu sueldo semanal es de $" + pago) ;