Proceso Ejercicio5
	Definir cantidadZapatos, precio Como Entero
	
	Escribir "Ingrese la cantidad de zapatos que desee comprar:"
	Leer cantidadZapatos
	
	Si cantidadZapatos >= 0 Entonces
		precio = cantidadZapatos * 80
		
		Si cantidadZapatos > 10 Y cantidadZapatos <= 20 Entonces
			precio = precio * 0.1
		Fin Si
		Si cantidadZapatos > 20 Y cantidadZapatos <= 30 Entonces
			precio = precio * 0.2
		Fin Si
		Si cantidadZapatos > 30 Entonces
			precio = precio * 0.4
		Fin Si
		
		Escribir "El precio total seria: " precio "."
	SiNo
		Escribir "Los numeros negativos no son validos."
	Fin Si
FinProceso
