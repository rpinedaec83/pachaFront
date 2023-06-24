Proceso numeroperfecto
	Definir numero como Entero
    Definir sum_divisores como Entero
    
    Escribir "Ingrese un número entero positivo: "
    Leer numero
    
    sum_divisores <- 0
    
    Para i <- 1 Hasta numero - 1 Con Paso 1 Hacer
        Si numero % i = 0 Entonces
            sum_divisores <- sum_divisores + i
        Fin Si
    Fin Para
    
    Si sum_divisores = numero Entonces
        Escribir "El número " numero " es un número perfecto."
    Sino
        Escribir "El número " numero " no es un número perfecto."
    Fin Si
    
FinProceso
