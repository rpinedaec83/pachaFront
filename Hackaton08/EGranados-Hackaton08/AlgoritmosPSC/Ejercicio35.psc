Algoritmo MayorMenor

Definir mayor, menor, numero como Entero

mayor <- 0
menor <- 9999

Para i = 1 Hasta 20 Con Paso 1 Hacer
	Escribir "Ingresa el número ", i, ": "
	Leer numero
	
	Si (numero > mayor) Entonces
		mayor <- numero
	FinSi
	
	Si (numero < menor) Entonces
		menor <- numero
	FinSi
FinPara

Escribir "El número mayor es: ", mayor
Escribir "El número menor es: ", menor

FinAlgoritmo
