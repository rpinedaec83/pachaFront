Proceso Programa03
	Escribir "Ingresa el primer numero: "
	Leer primerNumero
	Escribir "El primeer numero ingresado es " primerNumero
	
	Escribir "Ingresa el segundo numero: "
	Leer segundoNumero
	Escribir "El segundo numero ingresado es " segundoNumero
	
	Escribir "Operacion que quieras realizar: (+, -, *, /)"
	Leer operador
	
	Si operador == "+" Entonces
		operacion = "suma"
		resultado = primerNumero + segundoNumero
	FinSi
	Si operador == "-" Entonces
		operacion = "resta"
		resultado = primerNumero - segundoNumero
	FinSi
	Si operador == "*" Entonces
		operacion = "multiplicacion"
		resultado = primerNumero * segundoNumero
	FinSi
	Si operador == "/" Entonces
		operacion = "division"
		resultado = primerNumero / segundoNumero
	FinSi
	
	Escribir "El resultado de la " operacion " es: " resultado
FinProceso
