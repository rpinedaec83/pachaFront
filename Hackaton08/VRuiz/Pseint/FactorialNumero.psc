Proceso FactorialNumero
	Definir nmero, factorial, x Como Real
	Escribir "Insertar un numero"
	Leer nmero
	si nmero < 0 Entonces
		Escribir "El numero ",nmero, " no se puede calcular"
	SiNo
		x=1
		factorial = 1
		Mientras x <= nmero Hacer
			factorial=factorial*x
			x = x +1
		FinMientras
		Escribir "El factorial del numero ",nmero, "=",factorial
	FinSi
FinProceso
