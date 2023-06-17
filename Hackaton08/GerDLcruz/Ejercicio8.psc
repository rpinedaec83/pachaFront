Proceso Ejercicio8
	
	Definir primeraNota, segundaNota, terceraNota Como Entero
	Definir promedio Como Real
	
	Escribir "Ingrese su primera nota:"
	Leer primeraNota
	Escribir "Ingrese su segunda nota:"
	Leer segundaNota
	Escribir "Ingrese su tercera nota:"
	Leer terceraNota
	
	Si primeraNota >= 0 Y segundaNota >= 0 Y terceraNota >= 0 Y primeraNota <= 20 Y segundaNota <= 20 Y terceraNota <= 20 Entonces
		promedio = (primeraNota + segundaNota + terceraNota) / 3
		
		Si promedio >= 13 Entonces
			Escribir "Su promedio final es: " promedio ". Esta aprobado."
		SiNo
			Escribir "Su promedio final es: " promedio ". Esta desaprobado."
		Fin Si
	SiNo
		Escribir "Los numeros ingresados no son validos."
	Fin Si
FinProceso
