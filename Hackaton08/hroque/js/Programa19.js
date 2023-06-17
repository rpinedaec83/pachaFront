const Programa19 = () => {
	// Definir los salarios por día de cada tipo de empleado
	const SALARIO_CAJERO = 56;
	const SALARIO_SERVIDOR = 64;
	const SALARIO_PREPARADOR = 80;
	const SALARIO_MANTENIMIENTO = 48;

	// Obtener el número identificador del empleado y la cantidad de días trabajados
	let idEmpleado = parseInt(
		prompt(
			'Ingrese el número identificador del empleado:' +
				'\n\t ID | 1 - Cajero (56$/día)' +
				'\n\t ID | 2 - Servidor (64$/día)' +
				'\n\t ID | 3 - Preparador de mezclas (80$/día)' +
				'\n\t ID | 4 - Mantenimiento (48$/día)'
		)
	);
	if (idEmpleado > 4) return alert(`Número de identificación ${idEmpleado} de empleado inválido`);
	let diasTrabajados = parseInt(prompt('Ingrese la cantidad de días que trabajó el empleado(6 dias como maximo)'));
	if (diasTrabajados > 6) return alert('Solo se permite ingresar hasta 6 dias como maximo');
	// Calcular el salario total del empleado
	let salarioTotal = 0;
	switch (idEmpleado) {
		case 1: // Cajero
			salarioTotal = diasTrabajados * SALARIO_CAJERO;
			break;
		case 2: // Servidor
			salarioTotal = diasTrabajados * SALARIO_SERVIDOR;
			break;
		case 3: // Preparador de mezclas
			salarioTotal = diasTrabajados * SALARIO_PREPARADOR;
			break;
		case 4: // Mantenimiento
			salarioTotal = diasTrabajados * SALARIO_MANTENIMIENTO;
			break;
		default:
			return;
	}

	// Mostrar el salario total del empleado
	if (salarioTotal > 0) {
		alert(`El empleado ${idEmpleado} trabajó ${diasTrabajados} días y debe recibir $${salarioTotal} por su trabajo.`);
	}
};
