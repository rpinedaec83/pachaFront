Proceso ejercicio7
	
	
	Escribir "ingrese monto de la compra"
	leer subtotal
	
	Escribir "ingrese el tipo de membresia"
	leer tipomembresia
	
	si tipomembresia = "A" o tipomembresia = "a" Entonces
		descuento10 = subtotal*0.1
		pagofinal10=subtotal-descuento10
		Escribir "debe pagar " pagofinal10
	SiNo
		si tipomembresia = "B" o tipomembresia = "b" Entonces
			descuento15=subtotal*0.15
			pagofinal15=subtotal-descuento15
			Escribir "debe pagar " pagofinal15
		FinSi
	
		si tipomembresia = "C" o tipomembresia = "c" Entonces
			descuento20=subtotal*0.2
			pagofinal20=subtotal-descuento20
			Escribir  "debe pagar " pagofinal20
		FinSi
	FinSi
	
	
FinProceso

