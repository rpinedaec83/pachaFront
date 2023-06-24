function gregoryLeibniz(tolerance) {
	let pi = 0;
	let sum = 0;
	let sign = 1;
	let term = 1;
	let n = 0;

	do {
		pi = sum;
		term = 4 / (2 * n + 1);
		sum += sign * term;
		sign *= -1;
		n++;
	} while (Math.abs(sum - pi) > tolerance);

	return pi;
}

const Programa39 = () => {
	// let n = parseInt(prompt('Ingrese el valor de N par determinar la precisión de la aproximación:'));
	// let pi = 0;
	// for (let i = 0; i < n; i++) {
	// 	pi += (4 * Math.pow(-1, i)) / (2 * i + 1);
	// }
	// graficarResultado(`La proximacion de pi con la serie de Gregory-Leibniz es: ${pi}`);

	let pi = gregoryLeibniz(0.00001);
	graficarResultado(`La proximacion de pi con la serie de Gregory-Leibniz es: ${pi}`);
};
