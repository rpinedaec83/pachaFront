const Programa29 = () => {
	let suma = 0;
	let contador = 1;

	while (contador <= 100) {
		suma += contador;
		contador++;
	}

	alert(`La suma de los primeros 100 numeros es: ${suma}`);
};
