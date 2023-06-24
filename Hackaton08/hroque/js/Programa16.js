const Programa16 = () => {
	const numDia = parseInt(prompt('Ingrese un dia del 1 al 7'));

	switch (numDia) {
		case 1:
			alert(`El dia ${numDia} es lunes`);
			break;
		case 2:
			alert(`El dia ${numDia} es martes`);
			break;
		case 3:
			alert(`El dia ${numDia} es miercoles`);
			break;
		case 4:
			alert(`El dia ${numDia} es jueves`);
			break;
		case 5:
			alert(`El dia ${numDia} es viernes`);
			break;
		case 6:
			alert(`El dia ${numDia} es sabado`);
			break;
		case 7:
			alert(`El dia ${numDia} es domingo`);
			break;
		default:
			alert(`El dia ${numDia} es invalido, ingresar numero del 1 al 7`);
			break;
	}
};
