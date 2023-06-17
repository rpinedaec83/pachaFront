Proceso dia_de_semana
	Escribir "Ingrese un número del 1 al 7 para indicar el día de la semana:"
	Leer numero
	Segun numero Hacer
		Caso 1:
			Escribir "El número ", numero, " corresponde al día Lunes"
		Caso 2:
			Escribir "El número ", numero, " corresponde al día Martes"
		Caso 3:
			Escribir "El número ", numero, " corresponde al día Miércoles"
		Caso 4:
			Escribir "El número ", numero, " corresponde al día Jueves"
		Caso 5:
			Escribir "El número ", numero, " corresponde al día Viernes"
		Caso 6:
			Escribir "El número ", numero, " corresponde al día Sábado"
		Caso 7:
			Escribir "El número ", numero, " corresponde al día Domingo"
			
		Si numero > 7 Entonces
			Escribir "El número ingresado no es válido. Por favor, ingrese un número del 1 al 7."
		FinSi			
	
	FinSegun
	
FinProceso
