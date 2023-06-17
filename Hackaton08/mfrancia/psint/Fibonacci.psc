Proceso Fibonacci
	Definir n como Entero
    Definir num1 como Entero
    Definir num2 como Entero
    Definir resultado como Entero
    
    Escribir "Ingrese el número de términos de la serie de Fibonacci: "
    Leer n
    
    num1 <- 0
    num2 <- 1
    
    Escribir "La serie de Fibonacci es: "
    
    Para i <- 1 Hasta n Con Paso 1 Hacer
        Escribir num1
        resultado <- num1 + num2
        num1 <- num2
        num2 <- resultado
    Fin Para
FinProceso
