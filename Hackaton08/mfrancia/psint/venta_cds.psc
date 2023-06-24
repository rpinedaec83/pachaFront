Proceso venta_cds
	// Ingresar la cantidad de CDs a vender
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad
	
    // Calcular el precio total para el cliente
    Si cantidad < 10 Entonces
        precio = cantidad * 10
	FinSi
	
	Si cantidad >= 10 Y cantidad <= 99 Entonces
		precio = cantidad * 8
	FinSi
		
	Si cantidad >= 100 Y cantidad <= 499 Entonces
		precio = cantidad * 7
	FinSi
	
	Si cantidad >= 500 Entonces
		precio = cantidad * 6
	FinSi
	
	// Calcular la ganancia para el vendedor
	ganancia = precio * 0.0825
	
	// Imprimir los resultados
	Escribir "El precio total para el cliente es: $", precio
	Escribir "La ganancia para el vendedor es: $", ganancia
	
FinProceso
