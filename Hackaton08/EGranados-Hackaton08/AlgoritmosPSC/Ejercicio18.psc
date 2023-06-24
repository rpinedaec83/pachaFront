Proceso Precio_CDs
    Definir cantidad, precio, ganancia como Real;
    Escribir "Ingrese la cantidad de CDs a vender:";
    Leer cantidad;
    Si cantidad <= 9 Entonces
        precio <- cantidad * 10;
    SiNo
        Si cantidad <= 99 Entonces
            precio <- cantidad * 8;
        SiNo
            Si cantidad <= 499 Entonces
                precio <- cantidad * 7;
            SiNo
                precio <- cantidad * 6;
            FinSi
        FinSi
    FinSi
    ganancia <- precio * 0.0825;
    Escribir "El precio total para el cliente es: ", precio;
    Escribir "La ganancia para el vendedor es: ", ganancia;
FinProceso
