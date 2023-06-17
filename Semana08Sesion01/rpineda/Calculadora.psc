Proceso Calculadora
	//Inicializar las variables
	primerNumero = 0
	segundoNumero = 0
	operacion = ""
	respuesta = 0
	
	Escribir "Escriba el primer numero"
	Leer primerNumero
	Escribir "Escriba el segundo numero"
	Leer segundoNumero
	
	Escribir "La operacion (suma, resta, multiplicacion, division)"
	Leer operacion
	
	si operacion == "suma" Entonces
		respuesta = primerNumero + segundoNumero
	FinSi
	si operacion == "resta" Entonces
		respuesta = primerNumero - segundoNumero
	FinSi
	si operacion == "multiplicacion" Entonces
		respuesta = primerNumero * segundoNumero
	FinSi
	si operacion == "division" Entonces
		respuesta = primerNumero / segundoNumero
	FinSi
	
	Escribir "La " operacion " entre " primerNumero " y " segundoNumero " es " respuesta
FinProceso
