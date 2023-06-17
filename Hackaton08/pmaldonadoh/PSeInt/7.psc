Algoritmo Heladeria

Definir tipo, consumo, descuento, total_compra Como Real

Escribir "Ingrese el tipo de membresía (A, B o C):"
Leer tipo

Escribir "Ingrese el monto total de su compra:"
Leer consumo

Si tipo = "A" Entonces
    descuento = consumo * 0.1
Sino Si tipo = "B" Entonces
    descuento = consumo * 0.15
Sino Si tipo = "C" Entonces
    descuento = consumo * 0.2
Sino
    Escribir "El tipo de membresía ingresado es inválido."
Fin Si

total_compra = consumo - descuento

Escribir "El descuento aplicado es de:", descuento, "pesos."
Escribir "El total de su compra es de:", total_compra, "pesos."

FinAlgoritmo
