Proceso Programa33
	continuar = "S"
	
	// Ejecutar el ciclo mientras el usuario quiera continuar
	Mientras continuar = "S" Hacer
		// Aquí iría el código que se ejecutará en cada ciclo
		
		// Preguntar al usuario si quiere continuar
		Escribir "¿Desea continuar con el programa? (S/N)"
		Leer continuar
		
		// Verificar que la respuesta del usuario sea válida
		Mientras continuar <> "S" Y continuar <> "N" Hacer
			Escribir "Respuesta inválida. Por favor ingrese S o N."
			Leer continuar
		FinMientras
	FinMientras
	
	Escribir "Programa finalizado."
FinProceso
