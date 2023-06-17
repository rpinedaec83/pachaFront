const MEMBRESIAS = {
    ARRAY: ['A', 'B', 'C'],
    VALORES: {
        A: {
            DESCRIPCION: 'A',
            DESCUENTO: 0.1
        },
        B: {
            DESCRIPCION: 'B',
            DESCUENTO: 0.15
        },
        C: {
            DESCRIPCION: 'C',
            DESCUENTO: 0.2
        }
    }
};
const MENSAJE_PROMPT_RETO_07 = {
    BIENVENIDA: `Buen día Sr. Juan Perez`,
    TIPO_MEMBRESIA: `Ingrese el tipo de membresía en mayúscula(${MEMBRESIAS.ARRAY.join(', ')}):`,
    MONTO_COMPRA: `Ingrese el monto de la compra realizada:`,
}

const MENSAJE_PROMPT_ERROR_RETO_07 = 'Ingresó una membresía incorrecta. Por favor, vuelva a intentarlo';

function ejecutarReto07() {
    let tipoMembresia = Utils.ejecutarPromptYObtenerCadena(`${MENSAJE_PROMPT_RETO_07.BIENVENIDA} ${MENSAJE_PROMPT_RETO_07.TIPO_MEMBRESIA}`);
    let montoCompra = Utils.ejecutarPromptYParsearAEntero(`${MENSAJE_PROMPT_RETO_07.MONTO_COMPRA}`);
    let montoTotalFinal = 0;
    let porcentajeDescuento = '';

    switch (tipoMembresia) {
        case MEMBRESIAS.VALORES.A.DESCRIPCION:
            porcentajeDescuento = Utils.obtenerValorPorcentaje(MEMBRESIAS.VALORES.A.DESCUENTO);
            montoTotalFinal = Utils.obtenerDisminucionPorPorcentaje(montoCompra, MEMBRESIAS.VALORES.A.DESCUENTO)
            break;
        case MEMBRESIAS.VALORES.B.DESCRIPCION:
            porcentajeDescuento = Utils.obtenerValorPorcentaje(MEMBRESIAS.VALORES.B.DESCUENTO);
            montoTotalFinal = Utils.obtenerDisminucionPorPorcentaje(montoCompra, MEMBRESIAS.VALORES.B.DESCUENTO);
            break;
        case MEMBRESIAS.VALORES.C.DESCRIPCION:
            porcentajeDescuento = Utils.obtenerValorPorcentaje(MEMBRESIAS.VALORES.C.DESCUENTO);
            montoTotalFinal = Utils.obtenerDisminucionPorPorcentaje(montoCompra, MEMBRESIAS.VALORES.C.DESCUENTO);
            break;
        default:
            alert(MENSAJE_PROMPT_ERROR_RETO_07)
            return;
    }

    alert(`Usted posee la membresía: ${tipoMembresia}, con un descuento del ${porcentajeDescuento}. Por lo tanto tendra que pagar: ${montoTotalFinal}`);
}