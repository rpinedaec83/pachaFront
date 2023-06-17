Proceso Ejercicio9
	Definir cantidadSueldo Como Entero
	
	Escribir "Ingrese la cantidad de sueldo que gana:"
	Leer  cantidadSueldo
	
	Si cantidadSueldo > 0 Entonces
		Si cantidadSueldo <= 2000 Entonces
			Escribir "Su aumento sera del 10%."
		Fin Si
		Si cantidadSueldo > 2000 Entonces
			Escribir "Su aumento sera del 5%."
		Fin Si
	SiNo
		Escribir "El numero ingresado no es valido"
	Fin Si
FinProceso
