Proceso Ejercicio15
	Definir opcionSeleccionada Como Entero
	Definir valorCentimetros, valorLibras, resultado Como Real
	
	Escribir "Seleccione una de las opciones por su numero:"
	Escribir "1. Convertir centimetros a pulgadas"
	Escribir "2. Convertir libras a kilogramos"
	Leer opcionSeleccionada
	
	Segun opcionSeleccionada Hacer
		1:
			Escribir "Ingrese un valor en centimetros:"
			Leer valorCentimetros
			
			resultado = valorCentimetros / 2.54
			Escribir valorCentimetros " centimetros equivalen a " resultado " pulgadas."
		2:
			Escribir "Ingrese un valor en libras:"
			Leer valorLibras
			
			resultado = valorLibras / 2.2046
			Escribir valorLibras " libras equivalen a " resultado " kilogramos."
		De Otro Modo:
			Escribir "La opcion seleccionada es invalida."
	Fin Segun
FinProceso
