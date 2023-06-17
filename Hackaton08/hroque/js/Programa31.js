const Programa31 = () => {
	let numerosPares = [];
	let numerosImpares = [];

	for (let i = 1; i <= 10; i++) {
		let numero = parseInt(prompt('Ingresa el número ' + i + ':'));

		if (numero % 2 === 0) {
			numerosPares.push(numero);
		} else {
			numerosImpares.push(numero);
		}
	}

	let mediaPares = 0;
	let mediaImpares = 0;

	if (numerosPares.length > 0) {
		let sumaPares = numerosPares.reduce((a, b) => a + b);
		mediaPares = sumaPares / numerosPares.length;
	}

	if (numerosImpares.length > 0) {
		let sumaImpares = numerosImpares.reduce((a, b) => a + b);
		mediaImpares = sumaImpares / numerosImpares.length;
	}

	alert(
		'La media de los números pares es: ' +
			mediaPares.toFixed(2) +
			'\nLa media de los números impares es: ' +
			mediaImpares.toFixed(2)
	);
};
