const Programa27 = () => {
	let suma = 0;
	let contador = 0;
	let numero = 0;

	do {
		numero = parseFloat(prompt('Ingresa un número positivo (ingresa un número negativo para terminar):'));

		if (numero >= 0) {
			suma += numero;
			contador++;
		}
	} while (numero >= 0);

	if (contador > 0) {
		let media = suma / contador;
		alert(`La media de los ${contador} números positivos ingresados es ${media}`);
	} else {
		alert('No se ingresaron números positivos');
	}
};
