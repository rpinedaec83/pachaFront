const Programa23 = () => {
	let n = parseInt(prompt('Ingrese un número'));
	let suma = 0;

	for (let i = 1; i <= n; i += 2) {
		suma += i;
	}

	alert(`La suma de los números impares menores o iguales a ${n} es ${suma}`);
};
