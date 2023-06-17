Algoritmo NumeroPerfecto
    Definir num, sum Como Entero
    Escribir "Ingrese un número: "
    Leer num
    sum <- 0
    Para i <- 1 Hasta num / 2 Con Paso 1 Hacer
        Si num Mod i = 0 Entonces
            sum <- sum + i
        FinSi
    FinPara
    Si num = sum Entonces
        Escribir num, " es un número perfecto"
    SiNo
        Escribir num, " no es un número perfecto"
    FinSi
FinAlgoritmo
