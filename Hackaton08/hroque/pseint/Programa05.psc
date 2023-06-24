Proceso Programa05
	Escribir "Ingrese el numero de zapatos: "
	Leer zapatos
	precio = 80
	
	Si zapatos < 10 Entonces
		totalzapatos = zapatos * precio
		Escribir "Zapatos a comprar: " zapatos
		Escribir "Descuento: 0"
		Escribir "El precio total de los zapatos es: " totalzapatos
	SiNo
		Si zapatos < 20 Entonces
			totalzapatos = zapatos * precio
			descuento = totalzapatos * 0.10
			total = totalzapatos - descuento
			Escribir "Zapatos a comprar: " zapatos
			Escribir "Descuento: " descuento
			Escribir "El precio total de los zapatos es: " total
		SiNo
			Si zapatos < 30 Entonces
				totalzapatos = zapatos * precio
				descuento = totalzapatos * 0.20
				total = totalzapatos - descuento
				Escribir "Zapatos a comprar: " zapatos
				Escribir "Descuento: " descuento
				Escribir "El precio total de los zapatos es: " total
			SiNo
				totalzapatos = zapatos * precio
				descuento = totalzapatos * 0.40
				total = totalzapatos - descuento
				Escribir "Zapatos a comprar: " zapatos
				Escribir "Descuento: " descuento
				Escribir "El precio total de los zapatos es: " total
			FinSi
		FinSi
	FinSi
	
FinProceso
