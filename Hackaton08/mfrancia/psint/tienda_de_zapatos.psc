Proceso tienda_de_zapatos
	Definir cantidad, precio, total, descuento como Entero
    
    precio <- 80
    
    Escribir "Bienvenido a la tienda de zapatos"
    Escribir "Ingrese la cantidad de zapatos que desea comprar: "
    Leer cantidad
    
    total <- cantidad * precio
    
    Si cantidad > 30 Entonces
        descuento <- total * 0.4
    Sino
        Si cantidad > 20 Entonces
            descuento <- total * 0.2
        Sino
            Si cantidad > 10 Entonces
                descuento <- total * 0.1
            Sino
                descuento <- 0
            FinSi
        FinSi
    FinSi
    
    total <- total - descuento
	
    Escribir "El total de la compra es: $", total

FinProceso
