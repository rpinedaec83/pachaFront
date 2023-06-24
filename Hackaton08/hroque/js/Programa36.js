const fibonacci = (n) => {
	var fib = [0, 1];
	for (var i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
};

const Programa36 = () => {
	const n = parseInt(prompt('Ingresar el numero con el que quiere calcular la serie Fibonacci:'));

	graficarResultado(`La serie Fibonacci de ${n} es: ${fibonacci(n)}`);
};
