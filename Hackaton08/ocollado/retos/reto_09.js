const MENSAJE_PROMPT_RETO_09 = {
    BIENVENIDA: "Bienvenid@ Sr. Juan Perez'",
    SUELDO_ACTUAL: "Por favor, ingrese el sueldo actual que percibe:"
};
const SUELDO_TOPE = 2000;
const MAS_SUELDO_TOPE_AUMENTO = 0.05;
const MENOS_SUELDO_TOPE_AUMENTO = 0.1;

function ejecutarReto09() {
    let sueldoActual = Utils.ejecutarPromptYParsearAFlotante(`${MENSAJE_PROMPT_RETO_09.BIENVENIDA} ${MENSAJE_PROMPT_RETO_09.SUELDO_ACTUAL}`);
    let porcentajeAumento = '';
    let sueldoFinal = 0.0;

    if (sueldoActual < SUELDO_TOPE) {
        porcentajeAumento = Utils.obtenerValorPorcentaje(MENOS_SUELDO_TOPE_AUMENTO);
        sueldoFinal = Utils.obtenerAumentoPorPorcentaje(sueldoActual, MENOS_SUELDO_TOPE_AUMENTO);
    } else {
        porcentajeAumento = Utils.obtenerValorPorcentaje(MAS_SUELDO_TOPE_AUMENTO);
        sueldoFinal = Utils.obtenerAumentoPorPorcentaje(sueldoActual, MAS_SUELDO_TOPE_AUMENTO);
    }

    alert(`Usted recibió un aumento del ${porcentajeAumento}, por lo tanto su sueldo actual sería: ${sueldoFinal}`);
}