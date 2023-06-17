Algoritmo TiendaZapatos
  Definir cantidad, precio, descuento, total como entero
  Escribir "Ingrese la cantidad de zapatos a comprar:"
  Leer cantidad
  precio = 80
  total = cantidad * precio
  Si cantidad > 30 entonces
    descuento = total * 0.4
  SiNo
    Si cantidad > 20 entonces
      descuento = total * 0.2
    SiNo
      Si cantidad > 10 entonces
        descuento = total * 0.1
      SiNo
        descuento = 0
      FinSi
    FinSi
  FinSi
  total = total - descuento
  Escribir "El total de la compra es:", total
FinAlgoritmo
