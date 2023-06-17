Algoritmo AproximaciondePi

Definir n Como Entero
Definir pi, signo, denominador Como Real

Escribir "Ingrese la cantidad de términos a utilizar:"
Leer n

pi = 0
signo = 1
denominador = 1

Para i=1 hasta n hacer
    pi = pi + signo * (4 / denominador)
    signo = signo * -1
    denominador = denominador + 2
Fin Para

Escribir "El valor aproximado de pi con", n, "términos es:", pi

FinAlgoritmo
