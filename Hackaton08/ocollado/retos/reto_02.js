const MENSAJE_PROMPT_RETO_02 = `Ingrese el número entero que sea negativo:`;
const MENSAJE_ERROR_RETO_02 = `El número ingresado no es un valor entero`;

function ejecutarReto02() {
    let numero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_02);

    if (!Utils.esValorEntero(numero)){
        alert(MENSAJE_ERROR_RETO_02);
        return;
    }

    let esNumeroNegativo = Utils.esNumeroNegativo(numero);

    alert(`El número ${numero} ${Utils.obtenerSiONo(esNumeroNegativo)} es negativo`);
}