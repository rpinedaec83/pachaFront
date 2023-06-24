Proceso aproxima_pi
	
    Definir n como Entero
    Definir pi_aprox como Real
    
    Escribir "Ingrese el número de términos a utilizar para aproximar Pi: "
    Leer n
    
    pi_aprox <- 0
    
    Para i <- 0 Hasta n - 1 Con Paso 1 Hacer
        pi_aprox <- pi_aprox + ((-1)^i) / (2 * i + 1)
    Fin Para
    
    pi_aprox <- 4 * pi_aprox
    
    Escribir "La aproximación de Pi con la serie de Gregory-Leibniz utilizando " n " términos es: " pi_aprox
    
FinProceso
