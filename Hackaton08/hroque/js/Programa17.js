const Programa17 = () => {
	let hora = prompt('Ingresa una hora en formato HH:MM:SS');

	// Separar la hora, los minutos y los segundos
	let partesHora = hora.split(':');
	let horas = parseInt(partesHora[0]);
	let minutos = parseInt(partesHora[1]);
	let segundos = parseInt(partesHora[2]);

	// Incrementar los segundos
	segundos++;

	// Si los segundos llegan a 60, reiniciar los segundos y aumentar los minutos
	if (segundos === 60) {
		segundos = 0;
		minutos++;
	}

	// Si los minutos llegan a 60, reiniciar los minutos y aumentar las horas
	if (minutos === 60) {
		minutos = 0;
		horas++;
	}

	// Si las horas llegan a 24, reiniciar las horas
	if (horas === 24) {
		horas = 0;
	}

	// Formatear la hora con ceros a la izquierda si es necesario
	let nuevaHora = (horas < 10 ? '0' : '') + horas;
	let nuevoMinuto = (minutos < 10 ? '0' : '') + minutos;
	let nuevoSegundo = (segundos < 10 ? '0' : '') + segundos;

	// Mostrar la hora actualizada
	alert('La hora en un segundo es: ' + nuevaHora + ':' + nuevoMinuto + ':' + nuevoSegundo);
};
