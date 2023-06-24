const MENSAJE_PROMPT_RETO_05 = {
    BIENVENIDA: "Bienvenid@ a la tienda de zapatos 'Mi palomita'",
    TOTAL_ZAPATOS_VENDIDOS: "Por favor, ingrese el total de zapatos vendidos:"
};
const PRECIO_ESTANDAR_ZAPATOS = 80;
const SIGNO_DINERO = "$";
const DESCUENTOS = {
    DIEZ: {
        PORCIENTO: 0.1
    },
    VEINTE: {
        PORCIENTO: 0.2
    },
    CUARENTA: {
        PORCIENTO: 0.4
    }
}


function ejecutarReto05() {
    let totalZapatosVendidos = Utils.ejecutarPromptYParsearAEntero(`${MENSAJE_PROMPT_RETO_05.BIENVENIDA}\n${MENSAJE_PROMPT_RETO_05.TOTAL_ZAPATOS_VENDIDOS}`);

    let montoTotal = PRECIO_ESTANDAR_ZAPATOS * totalZapatosVendidos;
    let montoTotalFinal = 0;
    let porcentajeAplicado = '';

    if (totalZapatosVendidos > 10 && totalZapatosVendidos <= 20) {
        porcentajeAplicado = Utils.obtenerValorPorcentaje(DESCUENTOS.DIEZ.PORCIENTO);
        montoTotalFinal = Utils.obtenerDisminucionPorPorcentaje(montoTotal, DESCUENTOS.DIEZ.PORCIENTO);
    } else if (totalZapatosVendidos > 20 && totalZapatosVendidos < 30) {
        porcentajeAplicado = Utils.obtenerValorPorcentaje(DESCUENTOS.VEINTE.PORCIENTO);
        montoTotalFinal = Utils.obtenerDisminucionPorPorcentaje(montoTotal, DESCUENTOS.VEINTE.PORCIENTO);
    } else if (totalZapatosVendidos >= 30) {
        porcentajeAplicado = Utils.obtenerValorPorcentaje(DESCUENTOS.CUARENTA.PORCIENTO);
        montoTotalFinal = Utils.obtenerDisminucionPorPorcentaje(montoTotal, DESCUENTOS.CUARENTA.PORCIENTO);
    }

    alert(`Realizando el cálculo de ${totalZapatosVendidos} zapatos vendidos con precio de ${SIGNO_DINERO}${PRECIO_ESTANDAR_ZAPATOS} cada unidad con un monto total inicial de: ${SIGNO_DINERO}${montoTotal}${this.obtenerDescripcionDescuento(porcentajeAplicado)}, el monto total final sería: ${SIGNO_DINERO}${montoTotalFinal}`);
}

function obtenerDescripcionDescuento(porcentajeAplicado) {
    return !porcentajeAplicado
        ? ` y sin aplicar descuentos`
        : ` y aplicando descuento del ${porcentajeAplicado}`;
}