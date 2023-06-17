Proceso Calculadora
	//Inicializar variables
	primernumero=0
	segundonumero=0
	operacion=""
	respuesta=0
	//Mnesajes al user
	Escribir "Ingrese el primer numero"
	leer primernumero
	//Mnesajes al user
	Escribir "Ingrese el segundo numero"
	leer segundonumero
	
	Escribir "La opracion (suma, resta, multiplicacion, division)"
	leer operacion
	
	si operacion == "suma" Entonces
		respuesta= primernumero+segundonumero
	FinSi
	si operacion == "resta" Entonces
		respuesta=primernumero - segundonumero
	FinSi
	si operacion == "multiplicacion" Entonces
		respuesta=primernumero*segundonumero		
	FinSi
	si operacion== "division" Entonces
		respuesta= primernumero / segundonumero
	FinSi
	
	Escribir "La " operacion "entre " primernumero "y " segundonumero "es " respuesta
	
FinProceso
