Proceso Ejercicio13
	Definir letraIngresada, letraMinuscula Como Caracter
	
	Escribir "Ingrese una letra:"
	Leer letraIngresada
	
	Si Longitud(letraIngresada) == 1 Entonces
		letraMinuscula = Minusculas(letraIngresada)
		
		Si letraMinuscula == "a" O letraMinuscula == "e" O letraMinuscula == "i" O letraMinuscula == "o" O letraMinuscula == "u" Entonces
			Escribir "La letra " letraIngresada " es una vocal."
		SiNo
			Escribir "El caracter " letraIngresada " no es una vocal o una letra."
		Fin Si
	SiNo
		Escribir "Ingrese solo una letra o valor valido."
	Fin Si
FinProceso
