Inicio
    Leer num1, num2, num3, num4
    pares <- 0
    mayor <- 0
    Si num1 es par Entonces
        pares <- pares + 1
        mayor <- num1
    Fin Si
    Si num2 es par Entonces
        pares <- pares + 1
        Si num2 > mayor Entonces
            mayor <- num2
        Fin Si
    Fin Si
    Si num3 es par Entonces
        pares <- pares + 1
        Si num3 > mayor Entonces
            mayor <- num3
        Fin Si
        Si num2 > 0 Entonces
            Si num3 > 0 Entonces
                num3 <- num3 * num2
            Fin Si
        Fin Si
    Fin Si
    Si num4 es par Entonces
        pares <- pares + 1
        Si num4 > mayor Entonces
            mayor <- num4
        Fin Si
        Si num1 < num4 Entonces
            media <- (num1 + num2 + num3 + num4) / 4
        Fin Si
    Fin Si
    Si num2 > num3 Entonces
        Si num3 >= 50 y num3 <= 700 Entonces
            suma <- num1 + num2 + num3 + num4
        Fin Si
    Fin Si
    Escribir "Hay ", pares, " números pares"
    Escribir "El mayor número es ", mayor
    Si num3 es par y num2 > 0 Entonces
        Escribir "El resultado de calcular el cuadrado del segundo número es ", num3
    Fin Si
    Si num1 < num4 Entonces
        Escribir "La media de los 4 números es ", media
    Fin Si
    Si num2 > num3 y num3 >= 50 y num3 <= 700 Entonces
        Escribir "La suma de los 4 números es ", suma
    Fin Si
Fin

