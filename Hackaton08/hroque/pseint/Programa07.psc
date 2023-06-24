Proceso Programa07
	Escribir "Ingresar el monto a comprar: "
	Leer compra
	Escribir "Ingresar el membresia del cliente: A, B, C "
	Leer membresia
	
	segun (membresia) hacer
		Caso 'A':
			Escribir "Membresia tipo A"
			Escribir "Total a pagar: ",compra - (compra * 0.10)
		Caso 'B':
			Escribir "Membresia tipo B"
			Escribir "Total a pagar: ",compra - (compra * 0.15)
		Caso 'C':
			Escribir "Membresia tipo C"
			Escribir "Total a pagar: ",compra - (compra * 0.20)
			
		De Otro Modo:
			Escribir "Total a pagar: ",compra;
	FinSegun
FinProceso
