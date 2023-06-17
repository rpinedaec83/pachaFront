// Hacer un algoritmo en Pseint y JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

function ej01(){
    data = document.getElementById("imp01");
    res = document.getElementById("res01");
    if(data.value.length == 3){
        res.innerHTML = "Si tiene 3 digitos"
    }
    else{
        res.innerHTML = "No tiene 3 digitos"
    }
}

function ej02(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número entero por el teclado y determinar si es negativo.
    data = document.getElementById("imp02");
    res = document.getElementById("res02");

    try {
        numero = parseInt(data.value);
        let result = Number.isNaN( numero ); 
        if(!result){
            if(numero < 0){
                res.innerHTML = "es un numero negativo"
            }
            else {
                res.innerHTML = "es un numero positivo"
            }
        }
        else{
            res.innerHTML = "Los datos ingresados no son numericos"
        }
    } catch (error) {
        throw "No se puede comvertir a numero"
    }
    
}
function ej03(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número y determinar si termina en 4.
    data = document.getElementById("imp03");
    res = document.getElementById("res03");

    try {
        numero = data.value
        intArr = numero.split('');
        ultimo = intArr[(intArr.length -1)]
        if(ultimo == 4){
            res.innerHTML = "Si ttermina en 4"
        }
        else{
            res.innerHTML = "No termina en 4"
        }


    } catch (error) {
        throw error
    }
    
}
function ej04(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número y determinar si termina en 4.
    data1 = document.getElementById("imp04-1");
    data2 = document.getElementById("imp04-2");
    data3 = document.getElementById("imp04-3");
    res = document.getElementById("res04");

    try {
        numero1 = parseInt(data1.value);
        numero2 = parseInt(data2.value);
        numero3 = parseInt(data3.value);
        let arrNumeros = [];
        arrNumeros.push(numero1);
        arrNumeros.push(numero2);
        arrNumeros.push(numero3);
        function compareNumbers(a, b) {
            return a - b;
        }

        console.log(arrNumeros.sort(compareNumbers));
        res.innerHTML = arrNumeros.sort(compareNumbers);


        let lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
        let n, i, k, aux;
        n = lista.length;
        console.log(lista); // Mostramos, por consola, la lista desordenada
        // Algoritmo de burbuja
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (lista[i] > lista[i + 1]) {
                    aux = lista[i];
                    lista[i] = lista[i + 1];
                    lista[i + 1] = aux;
                }
            }
        }

        console.log(lista); // Mostramos, por consola, la lista ya ordenada
        const sorted = lista.sort((a, b) => a - b);
        console.log(sorted);

    } catch (error) {
        throw error
    }
    
}
function ej05(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número y determinar si termina en 4.
    data = document.getElementById("imp05");
   
    res = document.getElementById("res05");

    try {
        let valorZapatos = 80.00
        let respuesta = 0.00

        numero = parseInt(data.value);
        switch (true) {
            case numero < 10:
                respuesta = numero * valorZapatos;
                break;
            case (numero >= 10 && numero < 20):
                descuento = (numero* valorZapatos)*0.10
                respuesta = (numero* valorZapatos) - descuento;
                break;
            case (numero >= 20 && numero < 30):
                descuento = (numero* valorZapatos)*0.20
                respuesta = (numero* valorZapatos) - descuento;
                break;
            case numero >= 30:
                descuento = (numero* valorZapatos)*0.40
                respuesta = (numero* valorZapatos) - descuento;
            default:
                respuesta = (numero* valorZapatos);
                break;
        }

        res.innerHTML = respuesta;
    } catch (error) {
        throw error
    }
    
}

function ej17(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número y determinar si termina en 4.
    data = document.getElementById("imp17");
   
    res = document.getElementById("res17");

    try {
        console.log(data.value)
        var momentDate = moment("2023-04-30 "+data.value);
        //moment().add(7, 'days');
       let fecha =  momentDate.add(2,'s')
        debugger
        console.log(fecha.format("dddd, MMMM Do YYYY, h:mm:ss a"))
        res.innerHTML = fecha.format("dddd, MMMM Do YYYY, h:mm:ss a");
    } catch (error) {
        throw error
    }
    
}

function ej39(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número y determinar si termina en 4.
   
    res = document.getElementById("res17");

    try {
        let Pi = 0
        n = 150;
        numero = -1
        signo = -1;
        for (let index = 1; index <= n; index++) {
            numero += 2;
            console.log(numero)
            signo  = signo* -1;
            console.log(signo)
            Pi += ((4/numero)*signo)
            console.log(Pi)
        }
        console.log(Pi);
    } catch (error) {
        throw error
    }
    
}


button01 = document.getElementById("ej01");
button01.addEventListener("click", ej01);
button02 = document.getElementById("ej02");
button02.addEventListener("click", ej02);
button03 = document.getElementById("ej03");
button03.addEventListener("click", ej03);
button04 = document.getElementById("ej04");
button04.addEventListener("click", ej04);
button05 = document.getElementById("ej05");
button05.addEventListener("click", ej05);
button17 = document.getElementById("ej17");
button17.addEventListener("click", ej17);

button39 = document.getElementById("ej39");
button39.addEventListener("click", ej39);

