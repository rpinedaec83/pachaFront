const Programa22 = () => {
	const num = parseInt(prompt('Ingrese el numero N que quiera sumar:'));
	let suma = 0;
	for (let i = 1; i <= num; i++) {
		suma += i;
	}
	alert(`La suma de los numeros de 1 hasta ${num} es ${suma}`);
};
