const CANTIDAD_DIGITOS_DISPONIBLES = 3;
const MENSAJE_PROMPT_RETO_01 = `Ingrese un número que posea ${CANTIDAD_DIGITOS_DISPONIBLES} dígitos`;

function ejecutarReto01() {
    let numero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_01);

    let cantidadNumero = numero.toString().length;
    let poseeTresNumeros = cantidadNumero === CANTIDAD_DIGITOS_DISPONIBLES

    alert(`El número ${numero} ${Utils.obtenerSiONo(poseeTresNumeros)} posee ${CANTIDAD_DIGITOS_DISPONIBLES} dígitos`);
}