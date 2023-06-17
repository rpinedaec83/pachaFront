Algoritmo CalcularMedia

Definir suma, cantidad, n1 Como Real

suma = 0
cantidad = 0
n1 = 0

Mientras n1 >= 0 Hacer
   Escribir "Ingrese un número positivo (o un número negativo para terminar): "
   Leer n1
   Si n1 >= 0 Entonces
      suma = suma + n1
      cantidad = cantidad + 1
   Fin Si
Fin Mientras

media = suma / cantidad

Escribir "La media de los números ingresados es: ", media

FinAlgoritmo
