const Programa12 = () => {
	const num1 = parseInt(prompt('Ingrese el primer número:'));
	const num2 = parseInt(prompt('Ingrese el segundo número:'));

	const resultado = Math.max(num1, num2);
	alert(`El numero mayor es ${resultado}`);
};
