Proceso ejercicio18
	
	Escribir "Ingrese la cantidad"
    Si cantidad <= 9 Entonces
        precio = cantidad * 10
	Sino 
	Si cantidad >= 10 Y cantidad <= 99 Entonces
			precio = cantidad * 8
	Si cantidad >= 100 Y cantidad <= 499 Entonces
				precio = cantidad * 7
			Sino
				precio = cantidad * 6
	Fin Si
			ganancia = precio * 0.0825
		Escribir "El precio total para el cliente es: $", precio
		Escribir "La ganancia para el vendedor es: $", ganancia
	
FinProceso