Proceso OperacionesAritmeticas
	primerNumero = 0
	segundoNumero = 0
	operacion = ""
	resultado = 0
	
	Escribir "Ingrese el primer numero:"
	Leer primerNumero
	Escribir "Ingrese el segundo numero:"
	Leer segundoNumero
	Escribir "Ingrese el tipo de operacion que desee realizar: (suma, resta, multiplicacion, division)"
	Leer operacion
	
	Si operacion == "suma" Entonces
		resultado = primerNumero + segundoNumero
	FinSi
	Si operacion == "resta" Entonces
		resultado = primerNumero - segundoNumero
	FinSi
	Si operacion == "multiplicacion" Entonces
		resultado = primerNumero * segundoNumero
	FinSi
	Si operacion == "division" Entonces
		resultado = primerNumero / segundoNumero
	FinSi
	
	Escribir "La " operacion " de " primerNumero " y " segundoNumero " es " resultado
FinProceso
