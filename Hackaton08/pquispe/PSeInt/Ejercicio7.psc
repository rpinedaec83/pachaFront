Proceso Ejercicio7
	Definir tipoMembresia Como Caracter
	
	Escribir "Ingrese su tipo de Membresia (Tipo A, Tipo B, Tipo C):"
	Leer tipoMembresia
	
	Si tipoMembresia == "Tipo A" O tipoMembresia == "Tipo B" O tipoMembresia == "Tipo C" Entonces
		Si tipoMembresia == "Tipo A" Entonces
			Escribir "Usted tiene un descuento del 10%."
		Fin Si
		Si tipoMembresia == "Tipo B" Entonces
			Escribir "Usted tiene un descuento del 15%."
		Fin Si
		Si tipoMembresia == "Tipo C" Entonces
			Escribir "Usted tiene un descuento del 20%."
		Fin Si
	SiNo
		Escribir "Tipo de Membresia no valido."
	Fin Si
FinProceso
