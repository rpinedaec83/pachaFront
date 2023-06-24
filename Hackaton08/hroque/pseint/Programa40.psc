Proceso Programa40
	Definir n, i, signo Como Entero
    Definir pii, denominador Como Real
    pii <- 3.0
    denominador <- 2.0
    signo <- 1
    Escribir "Ingrese el número de iteraciones:"
    Leer n
    Para i <- 1 Hasta n Con Paso 1 Hacer
        pii <- pii + (signo * 4 / (denominador * (denominador + 1) * (denominador + 2)))
        denominador <- denominador + 2
        signo <- signo * (-1)
    FinPara
    Escribir "La aproximación de pi es: ", pii

FinProceso
