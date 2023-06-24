const DIGITO_TERMINA_EN_VALOR = 4;
const MENSAJE_PROMPT_RETO_03 = `Ingrese un número que termine en ${DIGITO_TERMINA_EN_VALOR}`;

function ejecutarReto03() {
    let numero = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_03);

    let numeroTerminaEnValor = Utils.numeroTerminaEnValor(numero, DIGITO_TERMINA_EN_VALOR);

    alert(`El número ${numero} ${Utils.obtenerSiONo(numeroTerminaEnValor)} termina en ${DIGITO_TERMINA_EN_VALOR}`);
}