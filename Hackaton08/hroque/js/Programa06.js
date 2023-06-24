const Programa06 = () => {
	let horasTrabajadas = prompt('Ingrese las horas trabajadas:');

	horasTrabajadas = parseInt(horasTrabajadas);

	let sueldo;
	if (horasTrabajadas <= 40) {
		sueldo = horasTrabajadas * 20;
	} else {
		let horasExtras = horasTrabajadas - 40;
		sueldo = 40 * 20 + horasExtras * 25;
	}

	alert('El sueldo semanal del trabajador es $' + sueldo);
};
