function ejercicio01(numero1 = 0, numero2 = 0) {
	let respuesta = numero1 + numero2;
	return respuesta;
}

function ejercicio02(examen1, examen2, examen3, examen4) {
	let respuesta = (examen1 + examen2 + examen3 + examen4) / 4;
	return respuesta;
}

function ejercicio03(base, altura) {
	return base * altura;
}

const ejercicio04 = (base, altura) => {
	return (base * altura) / 2;
};

const ejercicio05 = (radio) => {
	return (Math.PI * Math.pow(radio, 2)).toPrecision(2);
};

const ejercicio06 = (horas, sueldohora) => {
	return horas * sueldohora;
};

const ejercicio07 = (metros) => {
	return (metros / 0.0254).toFixed(2);
};

const ejercicio08 = (dolar, soles) => {
	return (soles / dolar).toFixed(2);
};

const ejercicio09 = (year) => {
	const date = new Date();
	return date.getFullYear() - year;
};

const ejercicio10 = (arg) => {
	const edades = arg.map((obj) => obj.edad);
	const min = Math.min(...edades);
	const result = arg.find((obj) => obj.edad === min);
	return result;
};
const ejercicio11 = (antiguedad) => {
	if (antiguedad > 5) {
		return `Tiene $1000 de bono por ${antiguedad} años de antiguedad.`;
	} else if (antiguedad == 5) {
		return `Tiene $500 de bono por ${antiguedad} años de antiguedad.`;
	} else if (antiguedad == 4) {
		return `Tiene $400 de bono por ${antiguedad} años de antiguedad.`;
	} else if (antiguedad == 3) {
		return `Tiene $300 de bono por ${antiguedad} años de antiguedad.`;
	} else if (antiguedad == 2) {
		return `Tiene $200 de bono por ${antiguedad} años de antiguedad.`;
	} else if (antiguedad == 1) {
		return `Tiene $100 de bono por ${antiguedad} años de antiguedad.`;
	} else {
		return 'Los años debe ser un numero positivo';
	}
};

const ejercicio12 = () => {
	let sueldo = 1500;
	let resultado = `Año 0: $1500`;
	for (let i = 1; i <= 6; i++) {
		sueldo += sueldo * 0.1;
		resultado += `<li>Año ${i}: $${sueldo.toFixed(2)}  </li>`;
	}
	return resultado;
};
const ejercicio13 = (alumnos) => {
	const aprobados = alumnos.filter((nota) => nota >= 10.05);
	const desaprobados = alumnos.filter((nota) => nota < 10.05);
	return `Aprobados: ${aprobados.length} <br/> Desasprobados: ${desaprobados.length}`;
};
const ejercicio14 = (focos) => {
	/* 
		1 = Rojo
		2 = Verde
		3 = blancos
	*/

	const rojos = focos.filter((foco) => foco == 1);
	const verdes = focos.filter((foco) => foco == 2);
	const blancos = focos.filter((foco) => foco == 3);
	return `Focos rojos: ${rojos.length} <br/> Focos verdes: ${verdes.length} <br/> Focos blancos: ${blancos.length}`;
};
const ejercicio15 = (edad, elecciones) => {
	const date = new Date().getFullYear();
	const yearRest = elecciones - date;
	const edadFutura = edad + yearRest;

	if (edadFutura >= 18) {
		return `Puede votar en las siguientes elecciones porque tiene ${edadFutura} años.`;
	} else {
		return `No puede votar en las siguientes elecciones porque tiene ${edadFutura} años.`;
	}
};
module.exports = {
	ejercicio01,
	ejercicio02,
	ejercicio03,
	ejercicio04,
	ejercicio05,
	ejercicio06,
	ejercicio07,
	ejercicio08,
	ejercicio09,
	ejercicio10,
	ejercicio11,
	ejercicio12,
	ejercicio13,
	ejercicio14,
	ejercicio15,
};
