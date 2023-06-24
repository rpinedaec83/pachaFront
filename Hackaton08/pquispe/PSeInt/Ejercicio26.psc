Proceso Ejercicio26
	Definir dividendo, divisor Como Entero
	
	Escribir "Ingrese el dividendo: "
    Leer dividendo
    Escribir "Ingrese el divisor: "
    Leer divisor
    
    cociente = 0
    resto = abs(dividendo)
    
    mientras resto >= abs(divisor) hacer
        resto = resto - divisor
        cociente = cociente + 1
    fin mientras
    
    Escribir "El cociente de la division es: ", cociente
    Escribir "El resto de la division es: ", resto
FinProceso
