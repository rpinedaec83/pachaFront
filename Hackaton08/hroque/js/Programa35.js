const Programa35 = () => {
	let numeros = [];
	let numeroMaximo = Number.NEGATIVE_INFINITY;
	let numeroMinimo = Number.POSITIVE_INFINITY;

	// Pedir al usuario que ingrese los 20 números
	for (let i = 0; i < 20; i++) {
		let numero = prompt(`Ingrese el número ${i + 1}:`);
		numeros.push(numero);

		// Verificar si el número es mayor que el número máximo encontrado hasta ahora
		if (numero > numeroMaximo) {
			numeroMaximo = numero;
		}

		// Verificar si el número es menor que el número mínimo encontrado hasta ahora
		if (numero < numeroMinimo) {
			numeroMinimo = numero;
		}
	}

	// Mostrar los resultados al usuario
	graficarResultado(`El número máximo es ${numeroMaximo}`);
	graficarResultado(`El número mínimo es ${numeroMinimo}`);
};
