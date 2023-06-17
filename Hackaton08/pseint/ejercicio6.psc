Proceso ejercicio6
	horaregular=0
	sueldosemanal=0
	totalhoras=0
	
	Escribir "Ingresa la cantidad de horas trabajadas en la semana"
	Leer totalhoras
	horasextra=totalhoras-40
	
	si totalhoras <= 40 Entonces
		sueldosemanal=totalhoras*20
	SiNo
		sueldosemanal=800+(horasextra*25)
	FinSi
	
	Escribir "Se le pagará en la semana" sueldosemanal 
 
FinProceso
