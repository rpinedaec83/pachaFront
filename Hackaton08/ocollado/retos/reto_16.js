const MENSAJE_PROMPT_RETO_16 = `Ingrese un número del 1 al 7 que corresponda al día de la semana`;
const MENSAJE_PROMPT_ERROR_RETO_16 = `El número ingresado es incorrecto. Ingrese un valor válido`
const DIAS_SEMANA = {
    LUNES: {
        VALOR: 1,
        DESCRIPCION: 'Lunes'
    },
    MARTES: {
        VALOR: 2,
        DESCRIPCION: 'Martes'
    },
    MIERCOLES: {
        VALOR: 3,
        DESCRIPCION: 'Miercoles'
    },
    JUEVES: {
        VALOR: 4,
        DESCRIPCION: 'Jueves'
    },
    VIERNES: {
        VALOR: 5,
        DESCRIPCION: 'Viernes'
    },
    SABADO: {
        VALOR: 6,
        DESCRIPCION: 'Sábado'
    },
    DOMINGO: {
        VALOR: 7,
        DESCRIPCION: 'Domingo'
    },
}

function ejecutarReto16() {
    let diaSemana = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_16);
    let descripcionDiaSemana = '';

    switch (diaSemana) {
        case DIAS_SEMANA.LUNES.VALOR:
            descripcionDiaSemana = DIAS_SEMANA.LUNES.DESCRIPCION;
            break;
        case DIAS_SEMANA.MARTES.VALOR:
            descripcionDiaSemana = DIAS_SEMANA.MARTES.DESCRIPCION;
            break;
        case DIAS_SEMANA.MIERCOLES.VALOR:
            descripcionDiaSemana = DIAS_SEMANA.MIERCOLES.DESCRIPCION;
            break;
        case DIAS_SEMANA.JUEVES.VALOR:
            descripcionDiaSemana = DIAS_SEMANA.JUEVES.DESCRIPCION;
            break;
        case DIAS_SEMANA.VIERNES.VALOR:
            descripcionDiaSemana = DIAS_SEMANA.VIERNES.DESCRIPCION;
            break;
        case DIAS_SEMANA.SABADO.VALOR:
            descripcionDiaSemana = DIAS_SEMANA.SABADO.DESCRIPCION;
            break;
        case DIAS_SEMANA.DOMINGO.VALOR:
            descripcionDiaSemana = DIAS_SEMANA.DOMINGO.DESCRIPCION;
            break;
        default:
            alert(MENSAJE_PROMPT_ERROR_RETO_16);
            return;
    }

    alert(`El día de la semana es: ${descripcionDiaSemana}`);
}