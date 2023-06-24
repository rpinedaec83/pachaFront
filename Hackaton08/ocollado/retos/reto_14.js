const MENSAJE_PROMPT_RETO_14 = `Ingrese un entero positivo del 1 al 10 y al 9`;
const MENSAJE_ERROR_RETO_14 = {
    PRIMER_ERROR: `El número ingresado no es un valor entero`,
    SEGUNDO_ERROR: `Solo puede ingresar valores positivos del 1 al 10 y al 9`,
}

function ejecutarReto14() {
    let numero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_14);

    if (!Utils.esValorEntero(numero)){
        alert(MENSAJE_ERROR_RETO_14.PRIMER_ERROR);
        return;
    }

    if (numero < 0 || numero > 10) {
        alert(MENSAJE_ERROR_RETO_14.SEGUNDO_ERROR);
        return;
    }

    let esPrimo = Utils.esPrimo(numero);

    alert(`El valor ingresado: ${numero} ${Utils.obtenerSiONo(esPrimo)} es primo`);
}