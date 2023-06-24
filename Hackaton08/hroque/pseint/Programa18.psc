Proceso Programa18
	cantidad=0
	precioUnitario=0.0
	ganancia=0.0
	
	Escribir "Ingrese la cantidad de CDs que desea comprar: "
	Leer cantidad
	
	Si cantidad < 10 Entonces
		precioUnitario = 10
		Si cantidad >= 10 Y cantidad <= 99 Entonces
			precioUnitario = 8
		FinSi
		Si cantidad >= 100 Y cantidad <= 499 Entonces
			precioUnitario = 7
		FinSi
	Sino
		precioUnitario = 6
	FinSi
	
	precioTotal = cantidad * precioUnitario
	ganancia = precioTotal * 0.0825
	
	Escribir "El precio total para el cliente es: $", precioTotal
	Escribir "La ganancia para el vendedor es: $", ganancia
FinProceso
