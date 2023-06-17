                                // ------ EJERCICIO 1

function ejercicio1() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero: "));
    let cantidadDigitos = Math.abs(numeroIngresado).toString().length;

    if (cantidadDigitos === 3) {
        alert("El número " + numeroIngresado + " tiene 3 dígitos.");
    }
    else {
        alert("El número " + numeroIngresado + " no tiene 3 dígitos.");
    };
};



                            // ------EJERCICIO 2 

function ejercicio2() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero entero:"));

    if (numeroIngresado < 0) {
        alert("El numero " + numeroIngresado + " es negativo.");
    }
    else {
        alert("El numero " + numeroIngresado + " no es negativo.");
    };
};



                                    // ------- EJERCICIO 3 

function ejercicio3() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero: "));

    if (numeroIngresado % 10 == 4) {
    alert("El ultimo digito del numero " + numeroIngresado + " es 4.");
    }
    else {
    alert("El ultimo digito del numero " + numeroIngresado + " no es 4.");
    };
};



                            // ------ EJERCICIO 4

function ejercicio4() {
    let numeros = [];

    let primerNumero = numeros.push(parseInt(prompt("Ingrese el primer número:")));
    let segundoNumero = numeros.push(parseInt(prompt("Ingrese el segundo número:")));
    let tercerNumero = numeros.push(parseInt(prompt("Ingrese el tercer número:")));

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2 - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temporal = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temporal;
            };
        };
    };

    alert("El orden de menor a mayor de los números ingresados es: " + numeros[0] + ", " + numeros[1] + ", " + numeros[2] + ".");
};



                            // -------- EJERCICIO 5 

function ejercicio5() {
    cantidadZapatos = prompt("Ingrese la cantidad de zapatos que desee comprar:");
    cantidadZapatos = parseInt(cantidadZapatos);

    if (cantidadZapatos >= 0) {
        precio = cantidadZapatos * 80;

        if (cantidadZapatos > 10 && cantidadZapatos <= 20) {
            precio = precio * 0.1;
        }
        else if (cantidadZapatos > 20 && cantidadZapatos <= 30) {
            precio = precio * 0.2;
        }
        else if (cantidadZapatos > 30) {
            precio = precio * 0.4;
        };

        alert("El precio total seria: " + precio);
    }
    else {
        alert("Los numeros negativos no son validos.");
    };
};



                            // ---------EJERCICIO 6

function ejercicio6() {
    let cantidadHoras = prompt("Ingrese la cantidad de horas de trabajo:");
    cantidadHoras = parseInt(cantidadHoras);

    if (cantidadHoras >= 0) {
        let sueldoSemanal;

        if (cantidadHoras <= 40) {
            sueldoSemanal = cantidadHoras * 20;
        }
        else if (cantidadHoras > 40) {
            sueldoSemanal = 800 + ((cantidadHoras - 40) * 25);
        };

        alert("Su sueldo semanal es: " + sueldoSemanal);
    }
    else {
        alert("Los numeros negativos no son validos.");
    }
};



                                    // ---------- EJERCICIO 7 

function ejercicio7() {
    let tipoMembresia = prompt("Ingrese su tipo de Membresia (Tipo A, Tipo B, Tipo C):");

    if (tipoMembresia === "Tipo A" || tipoMembresia === "Tipo B" || tipoMembresia === "Tipo C") {
        if (tipoMembresia === "Tipo A") {
            alert("Usted tiene un descuento del 10%.");
        }
        else if (tipoMembresia === "Tipo B") {
            alert("Usted tiene un descuento del 15%.");
        }
        else if (tipoMembresia === "Tipo C") {
            alert("Usted tiene un descuento del 20%.");
        };
    }
    else {
        alert("Tipo de Membresia no valido.");
    };
};



                                // ------ EJERCICIO 8 

function ejercicio8() {
    let primeraNota = parseInt(prompt("Ingrese su primera nota:"));
    let segundaNota = parseInt(prompt("Ingrese su segunda nota:"));
    let terceraNota = parseInt(prompt("Ingrese su tercera nota:"));

    if (primeraNota >= 0 && segundaNota >= 0 && terceraNota >= 0 && primeraNota <= 20 && segundaNota <= 20 && terceraNota <= 20) {
        let promedio = (primeraNota + segundaNota + terceraNota) / 3;

        if (promedio >= 13) {
            alert("Su promedio final es: " + promedio + ". Esta aprobado.");
        }
        else {
            alert("Su promedio final es: " + promedio + ". Esta desaprobado.");
        };
    }
    else {
        alert("Los numeros ingresados no son validos.");
    };
};



                                        // ------- EJERCICIO 9 

function ejercicio9() {
    let cantidadSueldo = parseInt(prompt("Ingrese la cantidad de sueldo que gana:"));

    if (cantidadSueldo > 0) {
        if (cantidadSueldo <= 2000) {
            alert("Su aumento sera del 10%.");
        }
        else {
            alert("Su aumento sera del 5%.");
        };
    }
    else {
        alert("El numero ingresado no es valido");
    };
};



                                    // -----EJERCICIO 10 

function ejercicio10() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero:"));

    if (numeroIngresado % 2 == 0) {
        alert("El numero " + numeroIngresado + " es par.");
    }
    else {
        alert("El numero " + numeroIngresado + " es impar.");
    };
};



                    // ---- EJERCICIO 11 

function ejercicio11() {
    let primerNumero = parseInt(prompt("Ingrese el primer número:"));
    let segundoNumero = parseInt(prompt("Ingrese el segundo número:"));
    let tercerNumero = parseInt(prompt("Ingrese el tercer número:"));

    let mayorNumero;

    if (primerNumero >= segundoNumero && primerNumero >= tercerNumero) {
        mayorNumero = primerNumero;
    }
    else if (segundoNumero >= primerNumero && segundoNumero >= tercerNumero) {
        mayorNumero = segundoNumero;
    }
    else if (tercerNumero >= primerNumero && tercerNumero >= segundoNumero) {
        mayorNumero = tercerNumero;
    };

    alert("El número mayor es: " + mayorNumero);
};



                                    // -------- EJERCICIO 12 
function ejercicio12() {
    let primerNumero = parseInt(prompt("Ingrese el primer numero:"));
    let segundoNumero = parseInt(prompt("Ingrese el segundo numero:"));

    if (primerNumero > segundoNumero) {
        alert("El numero mayor es: " + primerNumero + ".");
    }
    else {
        alert("El numero mayor es: " + segundoNumero + ".");
    };
};


                            // ----------- EJERCICIO 13 

function ejercicio13() {
    letraIngresada = prompt("Ingrese una letra:");

    if (letraIngresada.length == 1) {
        letraMinuscula = letraIngresada.toLowerCase();

        if (letraMinuscula == "a" || letraMinuscula == "e" || letraMinuscula == "i" || letraMinuscula == "o" || letraMinuscula == "u") {
            alert("La letra " + letraIngresada + " es una vocal.");
        }
        else {
            alert("El caracter " + letraIngresada + " no es una vocal o una letra.");
        };
    }
    else {
        alert("Ingrese solo una letra o valor valido.");
    };
};



                                    // --------- EJERCICIO 14 

function ejercicio14() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero entre el 1 al 10"));

    if (numeroIngresado >= 1 && numeroIngresado <= 10) {
        numeroPrimo = "si";

        for (let i = 2; i < numeroIngresado; i++) {
            if (numeroIngresado % i == 0) {
                numeroPrimo = "no";
            };
        };

        if (numeroPrimo == "no" || numeroIngresado === 1) {
            alert("El numero " + numeroIngresado + " no es primo.");
        }
        else {
            alert("El numero " + numeroIngresado + " es primo.");
        };
    }
    else {
        alert("Ingrese solo un numero entre el 1 al 10.");
    };
};



                            // ------------ EJERCICIO 15 

function ejercicio15() {
    let opcionSeleccionada = parseInt(prompt(
        `Seleccione una de las opciones por su número:
            1. Convertir centímetros a pulgadas.
            2. Convertir libras a kilogramos.
        `
    ));

    let valorCentimetros
    let valorLibras
    let resultado

    switch(opcionSeleccionada) {
    case 1:
        valorCentimetros = parseFloat(prompt("Ingrese un valor en centímetros:"));
        resultado = valorCentimetros / 2.54;

        alert(valorCentimetros + " centímetros equivalen a " + resultado + " pulgadas.");
        break;
    case 2:
        valorLibras = parseFloat(prompt("Ingrese un valor en libras:"));
        resultado = valorLibras / 2.2046;

        alert(valorLibras + " libras equivalen a " + resultado + " kilogramos.");
        break;
    default:
        alert("La opción seleccionada es inválida.");
        break;
    };
};



                                    // ----------- EJERCICIO 16 

function ejercicio16() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 7"));
    let diaSemana = "";

    switch(numeroIngresado) {
    case 1:
        diaSemana = "lunes";
        break;
    case 2:
        diaSemana = "martes";
        break;
    case 3:
        diaSemana = "miercoles";
        break;
    case 4:
        diaSemana = "jueves";
        break;
    case 5:
        diaSemana = "viernes";
        break;
    case 6:
        diaSemana = "sabado";
        break;
    case 7:
        diaSemana = "domingo";
        break;
    default:
        alert("Ingrese solo un número del 1 al 7.");
        break;
    };

    if (diaSemana != "") {
        alert("El número " + numeroIngresado + " corresponde al día " + diaSemana + ".");
    };
};



                            // ------------ EJERCICIO 17 
function ejercicio17() {
    let horaIngresada = parseInt(prompt("Ingrese la hora:"));
    let minutoIngresado = parseInt(prompt("Ingrese los minutos:"));
    let segundoIngresado = parseInt(prompt("Ingrese los segundos:"));

    if (horaIngresada >= 0 && minutoIngresado >= 0 && segundoIngresado >= 0) {
        let residuo;
        segundoIngresado = segundoIngresado + 1;

        if (segundoIngresado >= 60) {
            residuo = segundoIngresado - 60;
            segundoIngresado = residuo;
            minutoIngresado = minutoIngresado + 1;
        };

        if (minutoIngresado >= 60) {
            residuo = minutoIngresado - 60;
            minutoIngresado = residuo;
            horaIngresada = horaIngresada + 1;
        };

        alert("La hora dentro de un segundo es: Hora: " + horaIngresada + ", Minutos: " + minutoIngresado + ", Segundos: " + segundoIngresado);
    }
    else {
        alert("Los números negativos no son válidos.");
    };
};



                                                    // --- EJERCICIO 18

function ejercicio18() {
    let cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs que desea comprar:"));

    if (cantidadCDs >= 0) {
        let precioTotal;

        if (cantidadCDs <= 9) {
            precioTotal = cantidadCDs * 10;
        }
        else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
            precioTotal = cantidadCDs * 8;
        }
        else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
            precioTotal = cantidadCDs * 7;
        }
        else if (cantidadCDs >= 500) {
            precioTotal = cantidadCDs * 6;
        }

        let gananciaVendedor = precioTotal * 0.0825;

        alert(
            `
            El precio total seria:  ${precioTotal}
            Ganancia del vendedor:  ${gananciaVendedor}
            `
        );
    }
    else {
        alert("Solo ingrese numeros positivos.");
    };
};



                                // ---------- EJERCICIO 19 
function ejercicio19() {
    let primerNumero = parseInt(prompt(
        `Seleccione un empleado por su numero:
            1. Cajero
            2. Servidor
            3. Preparador de mezclas
            4. Mantenimiento
        `
    ));

    if (primerNumero >= 1 && primerNumero <= 4) {
        let segundoNumero = parseInt(prompt("Ingrese la cantidad de dias que trabajo (maximo 6):"));

        if (segundoNumero >= 0 && segundoNumero <= 6) {
            let pagoTotal;

            switch (primerNumero) {
            case 1:
                pagoTotal = segundoNumero * 56;
                break;
            case 2:
                pagoTotal = segundoNumero * 64;
                break;
            case 3:
                pagoTotal = segundoNumero * 80;
                break;
            case 4:
                pagoTotal = segundoNumero * 48;
                break;
            };

            alert("El pago total por los dias de trabajo seria: " + pagoTotal);
        }
        else {
            alert("Solo ingrese numeros positivos, maximo hasta el 6.");
        };
    }
    else {
        alert("Seleccione un numero valido.");
    };
};



                                // ---------- EJERCICIO 20 -

function Cantidad_numeros_pares(primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
    let numerosPares = 0;

    if (primerNumero % 2 === 0) {
        numerosPares = numerosPares + 1;
    };
    if (segundoNumero % 2 === 0) {
        numerosPares = numerosPares + 1;
    };
    if (tercerNumero % 2 === 0) {
        numerosPares = numerosPares + 1;
    };
    if (cuartoNumero % 2 === 0) {
        numerosPares = numerosPares + 1;
    };

    alert("Cantidad de numeros pares: " + numerosPares);
};

function Mayor_numero(primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
    let mayorNumero;

    if (primerNumero >= segundoNumero && primerNumero >= tercerNumero && primerNumero >= cuartoNumero) {
        mayorNumero = primerNumero;
    }
    else if (segundoNumero >= primerNumero && segundoNumero >= tercerNumero && segundoNumero >= cuartoNumero) {
        mayorNumero = segundoNumero;
    }
    else if (tercerNumero >= primerNumero && tercerNumero >= segundoNumero && tercerNumero >= cuartoNumero) {
        mayorNumero = tercerNumero;
    }
    else if (cuartoNumero >= primerNumero && cuartoNumero >= segundoNumero && cuartoNumero >= tercerNumero) {
        mayorNumero = cuartoNumero;
    };

}
    alert("El numero mayor es: " + mayorNumero);


function Tercer_numero_par(segundoNumero, tercerNumero) {
    if (tercerNumero % 2 === 0) {
        let potencia = Math.pow(segundoNumero, 2);
        alert("La potencia cuadrada del segundo numero es: " + potencia);
    }
    else {
        alert("El tercer numero no es par.");
    };
};

function Numero1_menor_numero4(primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
    if (primerNumero < cuartoNumero) {
        let media = (primerNumero + segundoNumero + tercerNumero + cuartoNumero) / 4;
        alert("La media de los cuatro numeros es: " + media);
    }
    else {
        alert("El primer numero no es menor que el cuarto numero.");
    };
};

function Numero2_mayor_numero3(primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
    if (segundoNumero > tercerNumero) {
        if (tercerNumero >= 50 && tercerNumero <= 700) {
            let suma = primerNumero + segundoNumero + tercerNumero + cuartoNumero;
            alert("La suma de los cuatro numeros es: " + suma);
        }
        else {
            alert("El tercer numero no esta comprendido entre los valores 50 y 700.");
        };
    }
    else {
        alert("El segundo numero no es mayor que el tercero.");
    };
};


function ejercicio20() {
    let primerNumero = parseInt(prompt("Ingrese el primer numero"));
    let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
    let tercerNumero = parseInt(prompt("Ingrese el tercer numero"));
    let cuartoNumero = parseInt(prompt("Ingrese el cuarto numero"));

    if (primerNumero >= 0 && segundoNumero >= 0 && tercerNumero >= 0 && cuartoNumero >= 0) {
        Cantidad_numeros_pares(primerNumero, segundoNumero, tercerNumero, cuartoNumero);
        Mayor_numero(primerNumero, segundoNumero, tercerNumero, cuartoNumero);
        Tercer_numero_par(segundoNumero, tercerNumero);
        Numero1_menor_numero4(primerNumero, segundoNumero, tercerNumero, cuartoNumero);
        Numero2_mayor_numero3(primerNumero, segundoNumero, tercerNumero, cuartoNumero);
    }
    else {
        alert("Solo ingrese numeros positivos.");
    };
};