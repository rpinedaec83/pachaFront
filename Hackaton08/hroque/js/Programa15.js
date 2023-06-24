const Programa15 = () => {
	const centimetros = parseFloat(prompt('Ingresar los centimetros que quieras convertir a pulgadas:'));
	const libras = parseFloat(prompt('Ingresar las libras que quieras convertir a kilogramos:'));
	// Convertir centímetros a pulgadas
	let pulgadas = centimetros / 2.54;

	// Convertir libras a kilogramos
	let kilogramos = libras / 2.20462;

	// Retornar los valores convertidos
	alert(`Los ${centimetros}cm son ${pulgadas.toFixed(2)} pulgadas ` + `\nLas ${libras}lb son ${kilogramos.toFixed(2)} kg`);
};
