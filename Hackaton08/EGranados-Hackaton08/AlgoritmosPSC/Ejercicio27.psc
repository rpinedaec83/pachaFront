Proceso MediaNumerosPositivos
    Definir numero, suma, contador Como Real
    suma = 0
    contador = 0
    Escribir "Ingrese un número positivo (o un número negativo para terminar):"
    Leer numero
    mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1
        Escribir "Ingrese otro número positivo (o un número negativo para terminar):"
        Leer numero
    FinMientras
    si contador > 0 entonces
        media = suma / contador
        Escribir "La media de los números ingresados es: ", media
    sino
        Escribir "No se ha ingresado ningún número positivo."
    finSi
FinProceso
