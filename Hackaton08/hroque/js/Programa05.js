const Programa05 = () => {
	const precioZapato = 80;
	const cantidadZapatos = parseInt(prompt('Ingrese la cantidad de zapatos que desea comprar:'));
	let totalCompra = cantidadZapatos * precioZapato;
	let descuento = 0;
	if (cantidadZapatos > 10 && cantidadZapatos < 20) {
		descuento = totalCompra * 0.1;
	} else if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
		descuento = totalCompra * 0.2;
	} else if (cantidadZapatos >= 30) {
		descuento = totalCompra * 0.4;
	}

	let totalPagar = totalCompra - descuento;
	alert(
		'El número de zapatos es: ' +
			cantidadZapatos +
			'\nEl precio total sin descuento es: $' +
			totalCompra +
			'\nEl descuento aplicado es del: $' +
			descuento +
			'\nEl precio total con descuento es: $' +
			totalPagar
	);
};
