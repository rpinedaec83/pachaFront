const MENSAJE_PROMPT_RETO_12 = {
    PRIMER_NUMERO: 'Ingrese el primer número:',
    SEGUNDO_NUMERO: 'Ingrese el segundo número:'
}

function ejecutarReto12() {
    let primerNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_12.PRIMER_NUMERO);
    let segundoNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_12.SEGUNDO_NUMERO);

    let values = [];
    values.push(primerNumero, segundoNumero);

    values = values.sort(Utils.SORT.obtenerOrderASC())

    alert(`El número mayor de los ${values.length} ingresados es: ${values[0]}`);
}