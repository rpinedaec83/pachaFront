const Programa04 = () => {
	const num1 = parseInt(prompt('Ingrese el primer número:'));
	const num2 = parseInt(prompt('Ingrese el segundo número:'));
	const num3 = parseInt(prompt('Ingrese el tercer número:'));

	const numArray = [num1, num2, num3];

	const result = numArray.sort((a, b) => a - b);

	alert(`Los numeros de menor a mayor es: ${result}`);
};
