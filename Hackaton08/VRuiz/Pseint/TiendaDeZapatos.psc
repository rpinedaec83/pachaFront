Proceso TiendaDeZapatos
	
	Definir precio, pago, descuento Como Real
	
	Definir compra Como Entero
	
	Definir respuesta Como Caracter
	
	precio<- 80
	
	respuesta <- ""
	
	Escribir "Promoción en zapatos"
	
	Mientras respuesta =="" Hacer
		
		// datos
		Escribir 'Ingrese cantidad de zapatos ' Sin Saltar
		Leer compra
		
		// total a pagar según descuento
		Si compra>10 Entonces
			
			descuento <- 10
			
		FinSi
		
		Si compra>20 y compra <= 30 Entonces
			
			descuento <- 20
			
		FinSi
		
		Si compra>30 Entonces
			
			descuento <- 40
			
		FinSi
		
		pago <- (compra*precio) - (compra*precio*descuento/100)
		
		//resultados
		Escribir 'Total compra: ',compra*precio
		
		Escribir 'Descuento: ',descuento,'% '
		
		Escribir 'Total a pagar: ',pago
		
		Repetir
			
			Escribir '¿Desea otro cálculo? (s/n)'
			
			Leer respuesta
			
		Hasta Que (respuesta=="s" O respuesta=="n")
		
	FinMientras
FinProceso
