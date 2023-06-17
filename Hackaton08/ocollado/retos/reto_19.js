const MENSAJE_PROMPT_RETO_19 = {
    NUM_IDENTIFICADOR_EMPLEADO: 'Ingrese el número identificador del empleado',
    CANTIDAD_DIAS_LABORADOS: 'Ingrese la cantidad de días que trabajó en la semana'
};
const MENSAJE_PROMPT_ERROR_RETO_19 = {
    ERROR_CANTIDAD_DIAS_LABORADOS: 'Ingrese una cantidad de días laborados válido (6 días máximos)',
    ERROR_NUM_IDENTIFICADOR_EMPLEADO: 'El número identificador del empleado no existe'
}
const TIPOS_EMPLEADOS = {
    CAJERO: {
        NUM_IDENTIFICADOR: 12345,
        DESCRIPCION: 'cajero',
        SALARIO_X_DIA: 56
    },
    SERVIDOR: {
        NUM_IDENTIFICADOR: 12346,
        DESCRIPCION: 'servidor',
        SALARIO_X_DIA: 64
    },
    PREPARADOR_MEZCLAS: {
        NUM_IDENTIFICADOR: 12347,
        DESCRIPCION: 'preparador de mezclas',
        SALARIO_X_DIA: 80
    },
    MANTENIMIENTO: {
        NUM_IDENTIFICADOR: 12348,
        DESCRIPCION: 'mantenimiento',
        SALARIO_X_DIA: 48
    },
}

function ejecutarReto19() {
    let numIdentificadorEmpleado = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_19.NUM_IDENTIFICADOR_EMPLEADO);
    let cantidadDiasLaborados = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_19.CANTIDAD_DIAS_LABORADOS);

    if (cantidadDiasLaborados > 6) {
        alert(MENSAJE_PROMPT_ERROR_RETO_19.ERROR_CANTIDAD_DIAS_LABORADOS);
        return;
    }

    let tipoEmpleado = '';
    let pagoEmpleado = 0;

    switch (numIdentificadorEmpleado) {
        case TIPOS_EMPLEADOS.CAJERO.NUM_IDENTIFICADOR:
            tipoEmpleado = TIPOS_EMPLEADOS.CAJERO.DESCRIPCION;
            pagoEmpleado = cantidadDiasLaborados * TIPOS_EMPLEADOS.CAJERO.SALARIO_X_DIA;
            break;
        case TIPOS_EMPLEADOS.SERVIDOR.NUM_IDENTIFICADOR:
            tipoEmpleado = TIPOS_EMPLEADOS.SERVIDOR.DESCRIPCION;
            pagoEmpleado = cantidadDiasLaborados * TIPOS_EMPLEADOS.SERVIDOR.SALARIO_X_DIA;
            break;
        case TIPOS_EMPLEADOS.PREPARADOR_MEZCLAS.NUM_IDENTIFICADOR:
            tipoEmpleado = TIPOS_EMPLEADOS.PREPARADOR_MEZCLAS.DESCRIPCION;
            pagoEmpleado = cantidadDiasLaborados * TIPOS_EMPLEADOS.PREPARADOR_MEZCLAS.SALARIO_X_DIA;
            break;
        case TIPOS_EMPLEADOS.MANTENIMIENTO.NUM_IDENTIFICADOR:
            tipoEmpleado = TIPOS_EMPLEADOS.MANTENIMIENTO.DESCRIPCION;
            pagoEmpleado = cantidadDiasLaborados * TIPOS_EMPLEADOS.MANTENIMIENTO.SALARIO_X_DIA;
            break;
        default:
            alert(MENSAJE_PROMPT_ERROR_RETO_19.ERROR_NUM_IDENTIFICADOR_EMPLEADO);
            return;
    }

    alert(`Se le deberá pagar al empleado de tipo: ${tipoEmpleado} un monto de ${pagoEmpleado}$/día`);
}