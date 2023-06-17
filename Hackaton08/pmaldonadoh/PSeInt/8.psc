Algoritmo PromedioFinal
	
	Definir  nt1, nt2, nt3, promedio Como Real
	
	Escribir "Indicar la primera nota: "
	Leer  nt1
	Escribir "Indicar la segunda nota: "
	Leer  nt2
	Escribir "Indicar la tercera nota: "
	Leer  nt3
	
	promedio = ( nt1 + nt2 + nt3) / 3
	
	Si promedio > 10 Entonces
		Escribir "El estudiante esta aprobado"
	SiNo
		Escribir "El estudiante esta desaprobado"
	FinSi
	
	
FinAlgoritmo
