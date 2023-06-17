Proceso Ejercicio19
	Definir primerNumero, segundoNumero, pagoTotal Como Entero
	
	Escribir "Selectione un empleado por su numero:"
	Escribir "1. Cajero"
	Escribir "2. Servidor"
	Escribir "3. Preparador de mezclas"
	Escribir "4. Mantenimiento"
	Leer primerNumero
	
	Si primerNumero >= 1 Y primerNumero <= 4 Entonces
		Escribir "Ingrese la cantidad de dias que trabajo (maximo 6):"
		Leer segundoNumero
		
		Si segundoNumero >= 0 Y segundoNumero <= 6 Entonces
			Segun primerNumero Hacer
				1:
					pagoTotal = segundoNumero * 56
				2:
					pagoTotal = segundoNumero * 64
				3:
					pagoTotal = segundoNumero * 80
				4:
					pagoTotal = segundoNumero * 48
			Fin Segun
			
			Escribir "El pago total por los dias de trabajo seria: " pagoTotal "."
		SiNo
			Escribir "Solo ingrese numeros positivos, maximo hasta el 6."
		Fin Si
	SiNo
		Escribir "Seleccione un numero valido."
	Fin Si
FinProceso
