const Programa32 = () => {
	const menu = parseInt(
		prompt(
			'Ingresar numero del menu:' +
				'\n\t 1.- Ingresar 11 ciudades con su poblacion y nombre para saber la que tiene mayor poblacion' +
				'\n\t 2.- Ingresar la poblacion de 11 ciudades de cada provincia(3)' +
				'\n[El 2 es mucho texto, ingresas muchos numeros en el prompt]'
		)
	);
	switch (menu) {
		case 1:
			Programa32V1();
			break;
		case 2:
			Programa32V2();
			break;
		default:
			alert('Solo puedes elegir entre 1 o 2!');
	}
};

const Programa32V1 = () => {
	// Definimos las variables para almacenar el nombre de la ciudad y su población máxima
	let ciudadMaxPoblacion = '';
	let maxPoblacion = 0;

	// Pedimos al usuario que ingrese los datos de las 11 ciudades
	for (let i = 1; i <= 11; i++) {
		let ciudad = prompt(`Ingresa el nombre de la ciudad ${i}:`);
		let poblacion = parseInt(prompt(`Ingresa la población de ${ciudad}:`));

		// Verificamos si la población ingresada es mayor que la población máxima
		if (poblacion > maxPoblacion) {
			maxPoblacion = poblacion;
			ciudadMaxPoblacion = ciudad;
		}
	}

	// Mostramos por consola el resultado
	alert(`La ciudad con mayor población es ${ciudadMaxPoblacion} con una población de ${maxPoblacion} habitantes.`);
};

const Programa32V2 = () => {
	let ciudadMasPoblada;
	let provincia,
		ciudad,
		poblacion,
		poblacionMaxima = 0;

	// Pedir al usuario que ingrese la poblaci�n de cada ciudad

	for (provincia = 1; provincia <= 3; provincia++) {
		for (ciudad = 1; ciudad <= 11; ciudad++) {
			poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${ciudad} de la provincia ${provincia}`));

			if (poblacion > poblacionMaxima) {
				poblacionMaxima = poblacion;
				ciudadMasPoblada = `Provincia ${provincia}, Ciudad ${ciudad}`;
			}
		}
	}
	alert(`La ciudad con la mayor población es: ${ciudadMasPoblada} con una población de ${poblacionMaxima}`);
};
