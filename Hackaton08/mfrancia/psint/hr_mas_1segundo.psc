Proceso hr_mas_1segundo
	Definir hora, minuto, segundo Como Entero
	
	Escribir "Ingrese la hora: "
	Leer hora
	
	Escribir "Ingrese los minutos: "
	Leer minuto
	
	Escribir "Ingrese los segundos: "
	Leer segundo
	
	segundo = segundo + 1
	
	Si (segundo >= 60) Entonces
		segundo = 0
		minuto = minuto + 1
		Si (minuto >= 60) Entonces
			minuto = 0
			hora = hora + 1
			Si (hora >= 24) Entonces
				hora = 0
			FinSi
		FinSi
	FinSi
	
	Escribir "La hora dentro de un segundo es: ", hora, ":", minuto, ":", segundo

FinProceso
