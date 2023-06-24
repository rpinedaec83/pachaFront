Proceso Programa15
	Escribir 'Desea convertir cent�metros a pulgadas o libras a kilogramos?'
	Escribir "digite 1 Para cent�metros a pulgadas o 2 Para libras a kilogramos"
	Leer val1
	si (val1 < 3 y val1 > 0) Entonces
		Segun (val1)  Hacer
			caso 1:
				Escribir 'Ingrese la distancia en cent�metros'
				Leer distancia
				pulgadas <- distancia / 2.54
				Escribir "Las pulgadas son: ", pulgadas
			caso 2:
				Escribir 'Ingrese el peso en libras'
				Leer peso
				kilo <- peso * (1 / 2.21)
				Escribir "Los kilogramos son : ", kilo
			De Otro Modo:
				Escribir "opci�n inv�lida"
		FinSegun
	SiNo
		escribir "opcion no valida"
	FinSi

FinProceso
