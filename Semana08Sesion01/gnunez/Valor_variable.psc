Proceso variable
	val1=0
	val2=0
	respuesta=0
	text= "son iguales"
	Escribir "Ingrese el primer numero"
	leer val1
	
	Escribir "Ingrese el segundo numero"
	leer val2
	
	si val1 > val2 Entonces
		respuesta = val1
	FinSi
	
	si val2>val1 Entonces
		respuesta=val2
	FinSi
	
	si val1==val2 Entonces
		Escribir text
	FinSi
	
	Escribir "El numero mayor es " respuesta

	Escribir "con iguales"
	
FinProceso
