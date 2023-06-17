Proceso Ejercicio6
	Definir cantidadHoras, sueldoSemanal Como Entero
	
	Escribir "Ingrese la cantidad de horas de trabajo:"
	Leer cantidadHoras
	
	Si cantidadHoras >= 0 Entonces
		Si cantidadHoras <= 40 Entonces
			sueldoSemanal = cantidadHoras * 20
		Fin Si
		Si cantidadHoras > 40 Entonces
			sueldoSemanal = 800 + ((cantidadHoras - 40) * 25)
		Fin Si
		
		Escribir "Su sueldo semanal es: " sueldoSemanal "."
	SiNo
		Escribir "Los numeros negativos no son validos."
	Fin Si
FinProceso
