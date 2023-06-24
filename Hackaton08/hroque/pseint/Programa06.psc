Proceso Programa06
	Escribir "Horas de trabajo: "
	Leer horas
	Si horas < 41 Entonces
		Escribir "El sueldo es de: $" horas * 20
	SiNo
		pagonormal = (horas - (horas - 40)) * 20
		pagoextra = (horas - 40) * 25
		Escribir "Pago extra: " pagoextra 
		Escribir "El sueldo es de: $" pagonormal + pagoextra 
	FinSi
FinProceso
