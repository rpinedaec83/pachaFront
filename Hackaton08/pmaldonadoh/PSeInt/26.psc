Algoritmo Calculo_Resto_Cociente

Definir dividendo, divisor, cociente, resto Como Entero
cociente = 0
resto = 0

Escribir "Ingrese el dividendo: "
Leer dividendo
Escribir "Ingrese el divisor: "
Leer divisor

Mientras dividendo >= divisor Hacer
   dividendo = dividendo - divisor
   cociente = cociente + 1
Fin Mientras

resto = dividendo

Escribir "El cociente es: ", cociente
Escribir "El resto es: ", resto

FinAlgoritmo
