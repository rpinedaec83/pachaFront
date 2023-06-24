const Programa14 = () => {
	const numero = parseInt(prompt('Ingresar un numero del 1 al 10'));
	if (numero <= 1) return alert(`El numero ${numero} no puede ser un numero primo`);
	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			alert(`El numero ${numero} no es un numero primo`);
			return false;
		}
	}
	alert(`El numero ${numero} es un numero primo`);
};
