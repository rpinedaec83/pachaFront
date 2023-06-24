const MENSAJE_PROMPT_RETO_17 = {
    HORAS: 'Ingrese las hora',
    MINUTOS: 'Ingrese el minuto',
    SEGUNDOS: 'Ingrese el segundo'
};

function ejecutarReto17() {
    
    let horas = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_17.HORAS);
    let minutos = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_17.MINUTOS);
    let segundos = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_17.SEGUNDOS);
    let horaIngresada = `${parseZeroToDoubleZero(horas)}:${parseZeroToDoubleZero(minutos)}:${parseZeroToDoubleZero(segundos)}`;

    if (horas > 23 || minutos > 59 || segundos > 59) {
        alert('Ingrese una hora/minuto/segundo válido');
        return;
    }

    segundos = segundos + 1;
 
    if (segundos > 59) {
        segundos = 0;
        minutos = minutos + 1;
    }

    if (minutos > 59) {
        minutos = 0;
        horas = horas + 1;
    }

    if (horas > 23) {
        horas = 0;
    }

    let nuevoHorario = `${parseZeroToDoubleZero(horas)}:${parseZeroToDoubleZero(minutos)}:${parseZeroToDoubleZero(segundos)}`;

    alert(`Usted ingresó: ${horaIngresada}. Y dentro de un segundo la hora será: ${nuevoHorario}`);
}

function parseZeroToDoubleZero(tiempo) {
    return tiempo.toString().length === 1 ? `0${tiempo}` : tiempo.toString();
}