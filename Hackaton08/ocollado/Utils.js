const MATH_SIGN_NEGATIVO = -1;
const SI = 'si';
const NO = 'no';
const NOMBRE_CLIENTE_GENERICO = 'Omar Augusto Collado Vargas';
const VALOR_CONVERSION_CENTIMETRO_PULGADA = 2.54
const VALOR_CONVERSION_LIBRA_A_KILOGRAMO = 2.205

var Utils = {
    SORT: {
        obtenerOrderASC: () => (a, b) => b - a,
        obtenerOrderDESC: () => (a, b) => a - b
    },
    obtenerNombreGenerico: () => NOMBRE_CLIENTE_GENERICO,
    ejecutarPromptYParsearAEntero: (mensajePrompt) => parseInt(prompt(mensajePrompt)),
    ejecutarPromptYParsearAFlotante: (mensajePrompt) => parseFloat(prompt(mensajePrompt)),
    ejecutarPromptYObtenerCadena: (mensajePrompt) => prompt(mensajePrompt),
    esValorEntero: (valor) => Number.isInteger(valor),
    esNumeroNegativo: (numero) => (Math.sign(numero) === MATH_SIGN_NEGATIVO),
    numeroTerminaEnValor: (numero, valor) => numero % 10 == valor,
    obtenerSiONo: (valorBooleano) => valorBooleano ? SI : NO,
    obtenerAumentoPorPorcentaje: (valor, porcentaje) => valor + (valor * porcentaje),
    obtenerDisminucionPorPorcentaje: (valor, porcentaje) => valor - (valor * porcentaje),
    obtenerValorPorcentaje: (valorEnNumero) => `${valorEnNumero * 100}%`,
    obtenerPromedioValores: (promedios) => (promedios.reduce((a, b) => a + b, 0)) / promedios.length,
    esNumeroPar: (numero) => numero % 2 == 0,
    esPrimo: (numero) => {
        if (numero <= 1) return false;
        if (numero === 2) return true;
        let sqrt = Math.sqrt(numero);
        for (let i = 2; i <= sqrt; i++)
            if (numero % i === 0) return false;
        return true;
    },
    convertirCentimetrosAPulgadas: (centimetros) => centimetros/VALOR_CONVERSION_CENTIMETRO_PULGADA,
    convertirLibrasAKilogramos: (libras) => libras/VALOR_CONVERSION_LIBRA_A_KILOGRAMO
}