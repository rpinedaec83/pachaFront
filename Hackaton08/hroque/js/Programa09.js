const Programa09 = () => {
	let salario = parseFloat(prompt('Ingrese el salario actual del trabajador:'));

	if (salario > 2000) {
		salario *= 1.05; // aumento del 5%
	} else {
		salario *= 1.1; // aumento del 10%
	}

	alert(`El nuevo salario del trabajador es: $${salario.toFixed(2)}`);
};
