let hora = parseInt(prompt("Ingresa la hora actual:"));
let minuto = parseInt(prompt("Ingresa los minutos actuales:"));
let segundo = parseInt(prompt("Ingresa los segundos actuales:"));

segundo++;

if (segundo >= 60) {
    segundo = 0;
    minuto++;
    if (minuto >= 60) {
        minuto = 0;
        hora++;
        if (hora >= 24) {
            hora = 0;
        }
    }
}

console.log(`La hora dentro de un segundo es: ${hora}:${minuto}:${segundo}`);
