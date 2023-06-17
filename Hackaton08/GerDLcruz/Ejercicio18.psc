Proceso Ejercicio18
	
	Definir cantidadCDs, precioTotal Como Entero
	Definir gananciaVendedor Como Real
	
	Escribir "Ingrese la cantidad de CDs que desea comprar:"
	Leer cantidadCDs
	
	Si cantidadCDs >= 0 Entonces
		Si cantidadCDs <= 9 Entonces
			precioTotal = cantidadCDs * 10
		Fin Si
		Si cantidadCDs >= 10 Y cantidadCDs <= 99 Entonces
			precioTotal = cantidadCDs * 8
		Fin Si
		Si cantidadCDs >= 100 Y cantidadCDs <= 499 Entonces
			precioTotal = cantidadCDs * 7
		Fin Si
		Si cantidadCDs >= 500 Entonces
			precioTotal = cantidadCDs * 6
		Fin Si
		
		gananciaVendedor = precioTotal * 0.0825
		
		Escribir "El precio total seria: " precioTotal
		Escribir "Ganancia del vendedor: " gananciaVendedor
	SiNo
		Escribir "Solo ingrese numeros positivos."
	Fin Si
FinProceso
