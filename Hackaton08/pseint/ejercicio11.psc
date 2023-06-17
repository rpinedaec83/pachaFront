Proceso ejercicio11
	
	definir numero1, numero2, numero3 Como Entero
	
	escribir "Ingresa primer numero"
	Leer  numero1
	Escribir  "Ingresa segundo numero"
	Leer numero2
	Escribir "Ingresa tercer numero"
	leer numero3
	
	si numero1 < numero2 y numero1 < numero3 
		si numero2 < numero3 Entonces
			Escribir "numero mayor " numero3
		SiNo 
			Escribir "numero mayor " numero2
		FinSi		
	FinSi
	
	si numero2 < numero3 y numero2 < numero1 
		si numero3 < numero1 Entonces
			Escribir "numero mayor " numero1
		SiNo 
			Escribir "numero mayor " numero3
		FinSi		
	FinSi
	
	si numero3 < numero1 y numero3 < numero2 
		si numero1 < numero2 Entonces
			Escribir "numero mayor " numero2
		SiNo 
			Escribir "numero mayor " numero1
		FinSi		
	FinSi

	
FinProceso

