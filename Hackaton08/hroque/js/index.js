const fs = require('fs');

const cambiarExtension = (directorio, extensionAnterior, extensionNueva) => {
	fs.readdir(directorio, (error, archivos) => {
		if (error) {
			console.log(error);
			return;
		}

		archivos.forEach((archivo) => {
			const extension = archivo.split('.').pop();

			if (extension === extensionAnterior) {
				const nombreNuevo = `${archivo.slice(0, archivo.lastIndexOf('.'))}.${extensionNueva}`;
				fs.rename(`${directorio}/${archivo}`, `${directorio}/${nombreNuevo}`, (error) => {
					if (error) {
						console.log(error);
						return;
					}
					console.log(`El archivo ${archivo} se ha renombrado como ${nombreNuevo}`);
				});
			}
		});
	});
};

cambiarExtension('C:/Users/HP/Desktop/PachaQFront/pachaFront-ejercicios/Hackaton08/hroque/js', 'psc', 'js');
