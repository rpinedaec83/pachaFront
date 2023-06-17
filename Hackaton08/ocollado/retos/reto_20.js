const MENSAJE_PROMPT_RETO_20 = {
    PRIMER_ENTERO_POSITIVO: `Ingrese el primer número entero positivo:`,
    SEGUNDO_ENTERO_POSITIVO: `Ingrese el segundo número entero positivo:`,
    TERCERO_ENTERO_POSITIVO: `Ingrese el tercer número entero positivo:`,
    CUARTO_ENTERO_POSITIVO: `Ingrese el cuarto número entero positivo:`,
};

const MENSAJE_PROMPT_ERROR_RETO_20 = {
    ERROR_PRIMER_ENTERO_POSITIVO: `El primer valor no es entero y/o positivo`,
    ERROR_SEGUNDO_ENTERO_POSITIVO: `El segundo valor no es entero y/o positivo`,
    ERROR_TERCER_ENTERO_POSITIVO: `El tercer valor no es entero y/o positivo`,
    ERROR_CUARTO_ENTERO_POSITIVO: `El cuarto valor no es entero y/o positivo`,
}

function ejecutarReto20() {
    let primerEnteroPositivo = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_20.PRIMER_ENTERO_POSITIVO);
    if (!Utils.esValorEntero(primerEnteroPositivo) && Utils.esNumeroNegativo(primerEnteroPositivo)) {
        alert(MENSAJE_PROMPT_ERROR_RETO_20.ERROR_PRIMER_ENTERO_POSITIVO);
        return;
    }

    let segundoEnteroPositivo = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_20.SEGUNDO_ENTERO_POSITIVO);
    if (!Utils.esValorEntero(primerEnteroPositivo) && Utils.esNumeroNegativo(primerEnteroPositivo)) {
        alert(MENSAJE_PROMPT_ERROR_RETO_20.ERROR_SEGUNDO_ENTERO_POSITIVO);
        return;
    }

    let tercerEnteroPositivo = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_20.TERCERO_ENTERO_POSITIVO);
    if (!Utils.esValorEntero(primerEnteroPositivo) && Utils.esNumeroNegativo(primerEnteroPositivo)) {
        alert(MENSAJE_PROMPT_ERROR_RETO_20.ERROR_TERCER_ENTERO_POSITIVO);
        return;
    }

    let cuartoEnteroPositivo = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_20.CUARTO_ENTERO_POSITIVO);
    if (!Utils.esValorEntero(primerEnteroPositivo) && Utils.esNumeroNegativo(primerEnteroPositivo)) {
        alert(MENSAJE_PROMPT_ERROR_RETO_20.ERROR_CUARTO_ENTERO_POSITIVO);
        return;
    }

    let numerosEnterosArray = [];
    numerosEnterosArray.push(primerEnteroPositivo, segundoEnteroPositivo, tercerEnteroPositivo, cuartoEnteroPositivo);

    let numerosPares = numerosEnterosArray.filter((numero) => Utils.esNumeroPar(numero));
    let mayorDeTodos = numerosEnterosArray.sort(Utils.SORT.obtenerOrderASC())[0];


    alert(`Se realizan las siguientes operaciones con los siguientes valores .. [${numerosEnterosArray.join(', ')}]:\n
    Números pares: ${numerosPares.length}\n
    El mayor de todos: ${mayorDeTodos}`);
}