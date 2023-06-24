const esNumeroPerfecto = (num) => {
	let sumaDivisores = 0;
	for (let i = 1; i <= num / 2; i++) {
		if (num % i === 0) {
			sumaDivisores += i;
		}
	}
	return sumaDivisores === num;
};

const Programa38 = () => {
	const num = parseInt(prompt('Ingresar el numero para saber si es perfecto:'));

	graficarResultado(`El numero ${num} es ${esNumeroPerfecto(num) ? 'es' : 'no es'} perfecto`);
};
