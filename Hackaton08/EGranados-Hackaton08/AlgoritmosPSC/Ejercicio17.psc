Proceso Calcular_Hora_Un_Segundo
    Definir hora, minuto, segundo como Entero
    Escribir "Ingrese la hora (en formato de 24 horas): "
    Leer hora
    Escribir "Ingrese los minutos: "
    Leer minuto
    Escribir "Ingrese los segundos: "
    Leer segundo
    segundo <- segundo + 1
    si segundo = 60 entonces
        segundo <- 0
        minuto <- minuto + 1
        si minuto = 60 entonces
            minuto <- 0
            hora <- hora + 1
            si hora = 24 entonces
                hora <- 0
            FinSi
        FinSi
    FinSi
    Escribir "La hora dentro de un segundo es: ", hora, ":", minuto, ":", segundo
FinProceso
