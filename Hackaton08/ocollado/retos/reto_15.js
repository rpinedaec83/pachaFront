const MENSAJE_PROMPT_RETO_15 = {
    INGRESE_CENTIMETROS_A_PULGADAS: `Ingrese el primer valor en céntimetros para convertirlo a pulgadas`,
    INGRESE_LIBRAS_A_KILOGRAMOS: `Ingrese el primer valor en libras para convertirlo a kilogramos`,
};

function ejecutarReto15() {
    let centimetros = Utils.ejecutarPromptYParsearAFlotante(MENSAJE_PROMPT_RETO_15.INGRESE_CENTIMETROS_A_PULGADAS);
    let libras = Utils.ejecutarPromptYParsearAFlotante(MENSAJE_PROMPT_RETO_15.INGRESE_LIBRAS_A_KILOGRAMOS);

    let centimetrosAPulgadas = Utils.convertirCentimetrosAPulgadas(centimetros);
    let librasAKilogramos = Utils.convertirLibrasAKilogramos(libras);

    alert(`El primer valor en centímetros: ${centimetros}, su conversión a pulgadas es: ${centimetrosAPulgadas}\n
    y el segundo valor en libras: ${libras}, su conversión a kilogramos es: ${librasAKilogramos}`);
}