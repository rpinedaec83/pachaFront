Proceso Ejercicio33
	Definir respuesta Como Caracter
	
	Escribir "Desea continuar con el programa? (si / no)"
	Leer respuesta
	
	Si respuesta == "si" O respuesta == "no" Entonces
		Si respuesta == "si" Entonces
			Escribir "El programa seguira ejecutandose."
		Fin Si
		Si respuesta == "no" Entonces
			Escribir "El programa se ha detenido."
		Fin Si
	SiNo
		Escribir "Solo puede ingresar si o no."
	Fin Si
FinProceso
