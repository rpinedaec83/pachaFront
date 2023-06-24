const Programa25 = () => {
	const n = parseInt(prompt('Ingresar un numero para calcular su factorial:'));

	alert(`La factorial de ${n} es ${factorial(n)}`);
};
function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
