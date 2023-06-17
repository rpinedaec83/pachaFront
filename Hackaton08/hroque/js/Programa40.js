const Programa40 = () => {
	let pi = 3; // Empezamos con el primer término de la serie

	let signo = 1; // Usamos esta variable para alternar el signo de cada término
	let denominador = 2; // Empezamos con el primer denominador de la serie

	for (let i = 0; i < 100000; i++) {
		let termino = 4 / (denominador * (denominador + 1) * (denominador + 2)); // Calculamos el término actual
		pi += signo * termino; // Sumamos o restamos el término actual a la aproximación de pi
		signo *= -1; // Alternamos el signo para el siguiente término
		denominador += 2; // Avanzamos al siguiente denominador
	}

	graficarResultado(`Aproximacion final de pi con la serie Nilakantha es: ${pi}`); // Mostramos la aproximación final de pi
};
