const HORA_LIMITE_TRABAJO = 40;
const PAGO_NORMAL_POR_HORA = 20;
const PAGO_HHEE_POR_HORA = 25;

const MENSAJE_PROMPT_RETO_06 = {
    BIENVENIDA: `Bienvenid@ Sr. Juan Perez`,
    HORAS_LABORALES_REALIZADAS: "Por favor, ingrese las horas laborales realizadas:"
};

function ejecutarReto06() {
    let horasLaborales = Utils.ejecutarPromptYParsearAEntero(`${MENSAJE_PROMPT_RETO_06.BIENVENIDA} ${MENSAJE_PROMPT_RETO_06.HORAS_LABORALES_REALIZADAS}`);
    let sueldoFinal = 0;
    let horasExtras = 0;
    let bonoHorasExtras = 0;

    sueldoFinal = horasLaborales * PAGO_NORMAL_POR_HORA;

    if (horasLaborales > HORA_LIMITE_TRABAJO) {
        horasExtras = horasLaborales - HORA_LIMITE_TRABAJO;
        bonoHorasExtras = horasExtras * PAGO_HHEE_POR_HORA;
        sueldoFinal = sueldoFinal + bonoHorasExtras;
    }

    alert(`Estimado(a) ${NOMBRE_EMPLEADO}, usted realizó ${horasLaborales} horas laborales, del cual ${horasExtras} son horas extras.\nEn ese sentido, su sueldo final sería: ${sueldoFinal}`);
}