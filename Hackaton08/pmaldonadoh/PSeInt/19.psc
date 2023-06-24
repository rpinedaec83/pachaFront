Algoritmo PagarEmpleado
    Definir id, dias, salario Como Entero
    Escribir "Ingrese el ID del empleado: "
    Leer id
    Escribir "Ingrese el número de días trabajados: "
    Leer dias
    Segun id Hacer
        01:
            salario <- dias * 56
        02:
            salario <- dias * 64
        03:
            salario <- dias * 80
        04:
            salario <- dias * 48
        De Otro Modo:
            Escribir "El ID del empleado no es válido"
    FinSegun
    Si id >= 1 Y id <= 4 Entonces
        Escribir "El empleado con ID ", id, " trabajó ", dias, " días y debe recibir $", salario
    FinSi
FinAlgoritmo