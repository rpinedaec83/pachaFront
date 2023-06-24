Proceso calcular_descuento

	Definir tipo_membresia como Caracter
    Definir monto_compra, descuento, total_pagar como Real
    
    Escribir "Ingrese el tipo de membresía (A, B o C): "
    Leer tipo_membresia
    
    Escribir "Ingrese el monto total de la compra: "
    Leer monto_compra
    
    Si tipo_membresia = "A" Entonces
        descuento <- monto_compra * 0.1
	FinSi
    Si tipo_membresia = "B" Entonces
			descuento <- monto_compra * 0.15
	FinSi
	Si tipo_membresia = "C" Entonces
		descuento <- monto_compra * 0.2
	FinSi
			
	total_pagar <- monto_compra - descuento
	
	Escribir "Monto total de la compra: $", monto_compra
	Escribir "Descuento por membresía: $", descuento
	Escribir "Total a pagar: $", total_pagar

FinProceso
