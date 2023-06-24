Proceso ejercicio5
	punitario=80
	cantidad = 0
		
	Escribir "Ingrese cantidad de zapatos a llevar"
	leer cantidad
	
	subtotal=cantidad*80
	
	Si cantidad > 10 y cantidad <= 20 Entonces
		descuento10=subtotal*0.1
		total10=subtotal-descuento10
		Escribir "Debe pagar " total10
	Sino 
		Si cantidad > 20  y cantidad <= 30 Entonces
		descuento20=subtotal*0.2
		total20=subtotal-descuento20
		Escribir "Debe pagar " total20
		FinSi
	
		SI cantidad > 30 Entonces
		descuento40=subtotal*0.4
		total40=subtotal-descuento40
		Escribir "Debe pagar " total40
	FinSi

	
 FinSi
 
FinProceso
