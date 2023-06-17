Proceso Ejercicio17
	Definir horaIngresada, minutoIngresado, segundoIngresado, residuo Como Entero
	
	Escribir "Ingrese la hora:"
	Leer horaIngresada
	Escribir "Ingrese los minutos:"
	Leer minutoIngresado
	Escribir "Ingrese los segundos:"
	Leer segundoIngresado
	
	Si horaIngresada >= 0 Y minutoIngresado >= 0 Y segundoIngresado >= 0 Entonces
		segundoIngresado = segundoIngresado + 1
		
		Si segundoIngresado >= 60 Entonces
			residuo = segundoIngresado - 60
			segundoIngresado = residuo
			minutoIngresado = minutoIngresado + 1
		Fin Si
		Si minutoIngresado >= 60 Entonces
			residuo = minutoIngresado - 60
			minutoIngresado = residuo
			horaIngresada = horaIngresada + 1
		Fin Si
		
		Escribir "La hora dentro de un segundo:"
		Escribir "Hora: " horaIngresada ", Minutos: " minutoIngresado ", Segundos: " segundoIngresado
	SiNo
		Escribir "Lon numeros negativos no son validos."
	Fin Si
FinProceso
