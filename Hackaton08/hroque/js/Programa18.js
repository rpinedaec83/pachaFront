const Programa18 = () => {
	const precioUnitario = 10; // precio unitario en dólares
	const gananciaPorcentaje = 8.25; // ganancia del vendedor en porcentaje

	let cantidad = parseInt(prompt('Ingrese la cantidad de CDs a comprar:'));

	let precioTotal, ganancia;

	if (cantidad < 10) {
		precioTotal = cantidad * precioUnitario;
	} else if (cantidad >= 10 && cantidad <= 99) {
		precioTotal = cantidad * 8;
	} else if (cantidad >= 100 && cantidad <= 499) {
		precioTotal = cantidad * 7;
	} else {
		precioTotal = cantidad * 6;
	}

	ganancia = (gananciaPorcentaje / 100) * precioTotal;

	alert(`El precio total para el cliente es de $${precioTotal}` + `\nLa ganancia del vendedor es de $${ganancia.toFixed(2)}.`);
};
