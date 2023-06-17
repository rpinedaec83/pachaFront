Algoritmo AproximaciondePi2

Definir n Como Entero
Definir pi, signo, numerador, denominador Como Real

Escribir "Ingrese la cantidad de términos a utilizar:"
Leer n

pi = 3
signo = 1
numerador = 4
denominador = 2

Para i=1 hasta n hacer
    pi = pi + signo * (numerador / denominador)
    signo = signo * -1
    numerador = numerador * numerador
    denominador = denominador * (denominador + 1) * (denominador + 2)
Fin Para

Escribir "El valor aproximado de pi con", n, "términos es:", pi

FinAlgoritmo
