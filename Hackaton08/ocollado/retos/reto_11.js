const MENSAJE_PROMPT_RETO_11 = {
    PRIMER_NUMERO: 'Ingrese el primer número:',
    SEGUNDO_NUMERO: 'Ingrese el segundo número:',
    TERCER_NUMERO: 'Ingrese el tercer número:',
}

function ejecutarReto11() {
    let primerNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_11.PRIMER_NUMERO);
    let segundoNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_11.SEGUNDO_NUMERO);
    let tercerNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_11.TERCER_NUMERO);

    let values = [];
    values.push(primerNumero, segundoNumero, tercerNumero);

    values = values.sort(Utils.SORT.obtenerOrderASC())

    alert(`El número mayor de los ${values.length} ingresados es: ${values[0]}`);
}