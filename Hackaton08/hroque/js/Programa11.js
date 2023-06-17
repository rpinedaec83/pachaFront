const Programa11 = () => {
	const num1 = parseInt(prompt('Ingrese el primer número:'));
	const num2 = parseInt(prompt('Ingrese el segundo número:'));
	const num3 = parseInt(prompt('Ingrese el tercer número:'));

	const numArray = [num1, num2, num3];

	const resultado = Math.max(...numArray);
	alert(`El numero maximo es ${resultado}`);
};
