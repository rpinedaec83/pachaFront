Algoritmo DescuentoMembresia
  Definir subtotal, total como entero
  Definir membresia como caracter
  Escribir "Ingrese el subtotal de la compra:"
  Leer subtotal
  Escribir "Ingrese el tipo de membresía (A, B o C):"
  Leer membresia
  Si membresia = "A" entonces
    total = subtotal - subtotal * 0.1
  SiNo Si membresia = "B" entonces
    total = subtotal - subtotal * 0.15
  SiNo Si membresia = "C" entonces
    total = subtotal - subtotal * 0.2
  SiNo
    Escribir "El tipo de membresía ingresado no es válido."
  FinSi
  Si membresia = "A" o membresia = "B" o membresia = "C" entonces
    Escribir "El total a pagar con descuento es:", total
  FinSi
FinAlgoritmo
