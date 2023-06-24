Proceso media_pares_impares
	Definir sumaPares, sumaImpares, contadorPares, contadorImpares, numero como Entero
    
    sumaPares <- 0
    sumaImpares <- 0
    contadorPares <- 0
    contadorImpares <- 0
    
    Escribir "Ingrese diez números:"
    
    Para i <- 1 hasta 10 hacer
        Leer numero
        Si numero % 2 = 0 entonces
            sumaPares <- sumaPares + numero
            contadorPares <- contadorPares + 1
        Sino
            sumaImpares <- sumaImpares + numero
            contadorImpares <- contadorImpares + 1
        Fin Si
    Fin Para
    
    Si contadorPares = 0 entonces
        Escribir "No se ingresaron números pares"
    Sino
        Escribir "La media de los números pares es:", sumaPares / contadorPares
    Fin Si
    
    Si contadorImpares = 0 entonces
        Escribir "No se ingresaron números impares"
    Sino
        Escribir "La media de los números impares es:", sumaImpares / contadorImpares
    Fin Si
    
FinProceso
