const MENSAJE_PROMPT_RETO_04 = {
    PRIMER_NUMERO: "Ingrese el primer número",
    SEGUNDO_NUMERO: "Ingrese el segundo número",
    TERCER_NUMERO: "Ingrese el tercer número",
};

function ejecutarReto04() {
    let primerNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_04.PRIMER_NUMERO);
    let segundoNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_04.SEGUNDO_NUMERO);
    let tercerNumero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_04.TERCER_NUMERO);

    let values = [];
    values.push(primerNumero, segundoNumero, tercerNumero);
    values = values.sort(Utils.SORT.obtenerOrderDESC());

    alert(`El orden de los números de menor a mayor serían: ${values.join(', ')}`);
}