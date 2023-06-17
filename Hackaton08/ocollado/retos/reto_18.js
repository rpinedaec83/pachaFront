const MENSAJE_PROMPT_RETO_18 = 'Ingrese la cantidad de CDs a vender:';

const CATEGORIA_PRECIO = {
    A : 10,
    B : 8,
    C : 7,
    D : 6
}

const PORCENTAJE_GANANCIA_VENDEDOR = 0.0825;

function ejecutarReto18() {
    let cdsAVender = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_18);

    let precioTotalCliente = 0;

    if (cdsAVender <= 9) {
        precioTotalCliente = cdsAVender * CATEGORIA_PRECIO.A
    } else if (cdsAVender >= 10 && cdsAVender <= 99) {
        precioTotalCliente = cdsAVender * CATEGORIA_PRECIO.B
    } else if (cdsAVender >= 100 && cdsAVender <= 499) {
        precioTotalCliente = cdsAVender * CATEGORIA_PRECIO.C
    } else if (cdsAVender >= 500) {
        precioTotalCliente = cdsAVender * CATEGORIA_PRECIO.D
    }

    let gananciaVendedor = precioTotalCliente * PORCENTAJE_GANANCIA_VENDEDOR;

    alert(`Usted ingresó ${cdsAVender} CDs a vender, por lo tanto el precio total para el cliente es $${precioTotalCliente} y la ganancia para el vendedor es $${gananciaVendedor}`);
}