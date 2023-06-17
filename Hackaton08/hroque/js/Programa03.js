const Programa03 = () => {
	const numero = parseInt(prompt('Ingrese un numero para saber si termina en 4: '));
	numero % 10 === 4 ? alert(`El numero ${numero} termina en 4`) : alert(`El numero ${numero} no termina en 4`);
};
