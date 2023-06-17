const Programa26 = () => {
	const dividendo = parseFloat(prompt('Ingresar el dividendo:'));
	const divisor = parseFloat(prompt('Ingresar el divisor:'));

	let cociente = 0;
	let resto = dividendo;
	while (resto >= divisor) {
		resto -= divisor;
		cociente++;
	}
	alert(`${dividendo}/${divisor}` + `\nCociente: ${cociente}, Resto: ${resto}`);
};
