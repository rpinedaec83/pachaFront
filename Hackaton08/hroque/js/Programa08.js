const Programa08 = () => {
	let nota1 = parseFloat(prompt('Ingresa la primera nota:'));
	let nota2 = parseFloat(prompt('Ingresa la segunda nota:'));
	let nota3 = parseFloat(prompt('Ingresa la tercera nota:'));

	let promedio = (nota1 + nota2 + nota3) / 3;

	if (promedio >= 3) {
		alert(`El estudiante aprobó con promedio de ${promedio.toFixed(2)}.`);
	} else {
		alert(`El estudiante no aprobó con promedio de ${promedio.toFixed(2)}.`);
	}
};
