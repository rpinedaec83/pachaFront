const MENSAJE_PROMPT_RETO_10 = `Ingrese un número para evaluar si es par o impar:`;

function ejecutarReto10() {
    let numero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_10);

    let esNumeroPar = Utils.esNumeroPar(numero);

    alert(`El numero ingresado es: ${esNumeroPar ? 'par' : 'impar'}`);
}