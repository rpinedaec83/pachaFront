const mcdEuclides = (a, b) => {
	if (b === 0) {
		return a;
	} else {
		return mcdEuclides(b, a % b);
	}
};

const Programa37 = () => {
	let num1 = parseInt(prompt('Ingresar el primer numero:'));
	let num2 = parseInt(prompt('Ingresar el segundo numero:'));
	let mcd = mcdEuclides(num1, num2);
	graficarResultado(`El MCD de ${num1} y ${num2} es ${mcd}`);
};
