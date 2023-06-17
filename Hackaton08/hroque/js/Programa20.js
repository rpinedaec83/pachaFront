const Programa20 = () => {
	let num1 = parseInt(prompt('Ingresa el primer número entero positivo: '));
	let num2 = parseInt(prompt('Ingresa el segundo número entero positivo: '));
	let num3 = parseInt(prompt('Ingresa el tercer número entero positivo: '));
	let num4 = parseInt(prompt('Ingresa el cuarto número entero positivo: '));

	// ¿Cuántos números son Pares?
	let pares = 0;
	if (num1 % 2 === 0) pares++;
	if (num2 % 2 === 0) pares++;
	if (num3 % 2 === 0) pares++;
	if (num4 % 2 === 0) pares++;
	graficarResultado(`Hay ${pares} números pares.`);

	// ¿Cuál es el mayor de todos?
	let mayor = num1;
	if (num2 > mayor) mayor = num2;
	if (num3 > mayor) mayor = num3;
	if (num4 > mayor) mayor = num4;
	graficarResultado(`El mayor número es ${mayor}.`);

	// Si el tercero es par, calcular el cuadrado del segundo.
	if (num3 % 2 === 0) {
		let cuadrado = num2 * num2;
		graficarResultado(`El cuadrado del segundo número es ${cuadrado}.`);
	}

	// Si el primero es menor que el cuarto, calcular la media de los 4 números.
	if (num1 < num4) {
		let media = (num1 + num2 + num3 + num4) / 4;
		graficarResultado(`La media de los 4 números es ${media}.`);
	}

	// Si el segundo es mayor que el tercero, verificar si el tercero está comprendido entre los valores 50 y 700.
	// Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	if (num2 > num3) {
		if (num3 >= 50 && num3 <= 700) {
			let suma = num1 + num2 + num3 + num4;
			graficarResultado(`La suma de los 4 números es ${suma}.`);
		}
	}
};
