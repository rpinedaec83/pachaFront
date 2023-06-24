let hora = prompt("Ingrese la hora (en formato de 24 horas): ");
let minuto = prompt("Ingrese los minutos: ");
let segundo = prompt("Ingrese los segundos: ");

segundo = parseInt(segundo) + 1;

if (segundo >= 60) {
    segundo = 0;
    minuto = parseInt(minuto) + 1;
    if (minuto >= 60) {
        minuto = 0;
        hora = parseInt(hora) + 1;
        if (hora >= 24) {
            hora = 0;
        }
    }
}

console.log("El tiempo un segundo después es: " + hora + ":" + minuto + ":" + segundo);
