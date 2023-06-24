const Programa07 = () => {
	let total = parseFloat(prompt('Ingrese el total de la compra:'));
	let tipoMembresia = prompt('Ingrese el tipo de membresía (A, B, C):').toUpperCase();
	console.log(tipoMembresia);
	let descuento = 0;
	if (tipoMembresia === 'A') {
		descuento = total * 0.1;
	} else if (tipoMembresia === 'B') {
		descuento = total * 0.15;
	} else if (tipoMembresia === 'C') {
		descuento = total * 0.2;
	} else {
		alert('Tipo de membresia invalida');
		return;
	}

	let totalAPagar = total - descuento;

	alert('Descuento: $' + descuento.toFixed(2) + '\nTotal a pagar: $' + totalAPagar.toFixed(2));
};
