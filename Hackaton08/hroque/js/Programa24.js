const Programa24 = () => {
	let sum = 0;

	for (let i = 2; i <= 1000; i += 2) {
		sum += i;
	}

	alert('La suma de todos los números pares hasta el 1000 es: ' + sum);
};
