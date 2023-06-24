const Programa21 = () => {
	const num = parseInt(prompt('Ingresar un numero para calcular su factorial:'));
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	alert(`La factorial de ${num} es ${result}`);
};
