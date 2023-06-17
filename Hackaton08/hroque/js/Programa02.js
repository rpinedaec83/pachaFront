const Programa02 = () => {
	const numero = parseInt(prompt('Ingrese un numero para saber si es negativo: '));
	numero < 0 ? alert('El numero es negativo') : numero === 0 ? alert('El numero es 0') : alert('El numero no es negativo');
};
