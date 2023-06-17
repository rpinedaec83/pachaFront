const Programa34 = () => {
	for (var i = 1; i <= 9; i++) {
		console.log('Tabla del ' + i + ':');
		for (var j = 1; j <= 10; j++) {
			console.log(i + ' x ' + j + ' = ' + i * j);
		}
		console.log('------------------------');
	}
	graficarResultado('La respuesta esta en la consola, ya que el resultado es muy largo para ponerlo en alerts', 'text-2xl');
};
