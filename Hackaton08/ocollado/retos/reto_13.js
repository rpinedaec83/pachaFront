const MENSAJE_PROMPT_RETO_13 = `Ingrese una letra para evaluar si es una vocal`;
const VOCALES = [
    'A',
    'E',
    'I',
    'O',
    'U'
]

function ejecutarReto13() {
    let letra = Utils.ejecutarPromptYObtenerCadena(MENSAJE_PROMPT_RETO_13);

    let esUnaVocal = VOCALES.some((x) => x === letra);

    alert(`La letra ingresada ${Utils.obtenerSiONo(esUnaVocal)} es una vocal`);
}