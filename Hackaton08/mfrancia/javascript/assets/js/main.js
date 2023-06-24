function ejercicio1(){
    let numero = '';

    numero = parseInt(prompt("Ingresar el número"));

    if( numero >= 100 && numero <= 999 ){
        alert("El número tiene 3 dígitos");
    }else{
        alert("El número no tiene 3 dígitos");
    }

}

function ejercicio2(){
    let numero = '';

    numero = parseInt(prompt("Ingresar el número"));

    if( numero < 0 ){
        alert("El número es negativo");
    }else{
        alert("El número es positivo");
    }
    
}

function ejercicio3(){
    let numero = '';

    numero = parseInt(prompt("Ingresar el número"));

    let numeroArry = numero.toString().split('').map(Number);

    console.log(numeroArry);

    let lastnumber = numeroArry[numeroArry.length - 1]
    
    
    if( lastnumber == 4){
        alert("El último número es 4");
    }else{
        alert("El último número no es 4, es " + lastnumber);
    }
    
}

function ejercicio4(){
    let numero1 = '';
    let numero2 = '';
    let numero3 = '';

    let menor, medio, mayor;

    numero1 = parseInt(prompt("Ingresar el primer número"));
    numero2 = parseInt(prompt("Ingresar el segundo número"));
    numero3 = parseInt(prompt("Ingresar el tercer número"));

    if( numero1 <= numero2 && numero1 <= numero3 ){
        menor = numero1;
        if( numero2 <= numero3 ){
            medio = numero2;
            mayor = numero3;
        }else{
            medio = numero3;
            mayor = numero2;
        }
    }else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
        if (numero1 <= numero3) {
          medio = numero1;
          mayor = numero3;
        } else {
          medio = numero3;
          mayor = numero1;
        }
    } else {
        menor = numero3;
        if (numero1 <= numero2) {
          medio = numero1;
          mayor = numero2;
        } else {
          medio = numero2;
          mayor = numero1;
        }
    }

    alert(menor + ", " + medio + ", " + mayor);
    
}

function ejercicio5(){
    let cantidad = '';
    let descuento = '';
    let descMensaje = '';
    let unitarioInicial = 80;
    let unitarioFinal = '';
    let total = '';

    cantidad = parseInt(prompt("Ingresar la cantidad de zapatos"));

    if( cantidad < 10 ){
        descuento = 0;
        descMensaje = 'No hay descuento';
    }else if (cantidad >= 10 && cantidad < 20){
        descuento = 0.1;
        descMensaje = "10%";
    }else if (cantidad >= 20 && cantidad < 30){
        descuento = 0.2;
        descMensaje = "20%";
    }else{
        descuento = 0.4;
        descMensaje = "40%";
    }

    if ( cantidad < 10 ){
        total = unitarioInicial * cantidad;
    }else{
        total = ( unitarioInicial * cantidad ) - (( unitarioInicial * cantidad ) * descuento );
    }

    alert(
        "Cantidad de Zapatos: " + cantidad + "\n" +
        "Precio Bruto: S/" + unitarioInicial * cantidad + "\n" +
        "Descuento: " + descMensaje + "\n" +
        "Precio Final: S/" + total
    );

}

function ejercicio6(){
   
    let valorHora = 20;
    let valorHoraExtra = 25;
    let horas = '';
    let horasExtra = '';
    let sueldo = ''
    let minHoras = 40;

    horas = parseInt(prompt("Ingresar cantidad de Horas"));

    if( horas >= minHoras ){
        horasExtra = horas - minHoras;
    }else{
        horasExtra = 0 ;
    }

    sueldo = (( horas - horasExtra ) * valorHora ) + ( horasExtra * valorHoraExtra );

    alert(
        "Total de Horas: " + horas + "\n" + 
        "Total de Horas Extra: " + horasExtra + "\n"+
        "Sueldo a Pagar: S/" + sueldo
    )

}

function ejercicio7(){

    let consumo = '';
    let tipoCliente = '';
    let desc = '';
    let descuento = '';

    consumo = prompt("Ingresar el consumo");
    tipoCliente = prompt("Ingresar el tipo de Cliente");
    

    tipoCliente = tipoCliente.toLowerCase();

    if( tipoCliente == 'a'){
        desc = 0.1;
        descuento = "Tienes un descuento del 10%";
    }else if ( tipoCliente == 'b'){
        desc = 0.15;
        descuento = "Tienes un descuento del 15%";
    }else if ( tipoCliente == 'c'){
        desc = 0.2;
        descuento = "Tienes un descuento del 20%";
    }else{
        alert("Ingresar una categoría Valida (A, B o C)");
        return;
    }

    alert(
        "Tu consumo fue de: S/" + consumo + "\n\n" +
        descuento + "\n\n" + 
        "Tu consumo final es de: S/" + ( consumo - (consumo * desc) )
    );

}

function ejercicio8(){
    let num1 = '';
    let num2 = '';
    let num3 = '';
    let prom = '';
    let status = '';

    num1 = parseInt(prompt("Ingresar nota 1"));

    if( num1 < 0 || num1 > 20 ){
        alert("Nota Invalida");
        return;
    }

    num2 = parseInt(prompt("Ingresar nota 2"));

    if( num2 < 0 || num2 > 20 ){
        alert("Nota Invalida");
        return;
    }

    num3 = parseInt(prompt("Ingresar nota 3"));

    if( num3 < 0 || num3 > 20 ){
        alert("Nota Invalida");
        return;
    }

    prom = ( num1 + num2 + num3 ) / 3;

    if( prom < 11 ){
        status = "Desaprobado";
    }else{
        status = "Aprobado";
    }

    alert( "Promedio: " + prom + "\n\n" + status );
}

function ejercicio9(){
    let sueldo = '';
    let aumento = '';
    let sueldoTotal = '';

    sueldo = parseInt(prompt("Ingresar Sueldo"));

    if( sueldo <= 0 ){
        alert("Sueldo Invalido");
        return;
    }else if ( sueldo >= 1 && sueldo <= 2000 ){
        aumento = 0.10;
        mensaje = "10%";
    }else{
        aumento = 0.05;
        mensaje = "5%"
    }

    sueldoTotal = sueldo + (sueldo * aumento);

    alert(
        "Recibes un aumento del: " + mensaje + "\n \n" +
        "Nuevo Sueldo: $" + sueldoTotal
    );
    
}

function ejercicio10(){
    let num = '';

    num = parseInt(prompt("Ingresar número"));

    if( num % 2 == 0){
        alert("El número es Par");
    }else{
        alert("El número es Impar");
    }

}

function ejercicio11(){

    let num1 = '';
    let num2 = '';
    let num3 = '';
    let mayor = '';

    num1 = parseInt(prompt("Ingresar número 1"));
    num2 = parseInt(prompt("Ingresar número 2"));
    num3 = parseInt(prompt("Ingresar número 3"));

    if( num1 > num2 && num1 > num3){
        mayor = num1;
    }else if( num2 > num1 && num2 > num3){
        mayor = num2;
    }else{
        mayor = num3;
    }

    alert("El número mayor es: " + mayor);

}

function ejercicio12(){

    let num1 = '';
    let num2 = '';
    let mayor = '';

    num1 = parseInt(prompt("Ingresar número 1"));
    num2 = parseInt(prompt("Ingresar número 2"));

    if( num1 > num2){
        mayor = num1;
    }else{
        mayor = num2;
    }

    alert("El número mayor es: " + mayor);

}

function ejercicio13(){

    let letra = '';

    letra = prompt("Ingresar letra");

    letra = letra.toLowerCase();

    if( letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ){
        alert("Es una vocal");
    }else{
        alert("No es una vocal");
    }

}

function ejercicio14(){

    let num = '';

    function primo(numero) {
        if (numero < 2) {
          return false;
        }
        for (let i = 2; i <= numero / 2; i++) {
          if (numero % i === 0) {
            return false;
          }
        }
        return true;
    }
      
    
    num = parseInt(prompt("Ingrese un número del 1 al 10:"));
      
    if( num < 1 || num > 10 ){
        alert("Numero fuera del rango");
        return;
    }else{
        if (primo(num)) {
            alert(num + " es número primo")
        } else {
            alert(num + " no es número primo")
        }
    }


}

function ejercicio15(){
    let valor = '';
    let convercion = '';
    let resultado = '';

    valor = parseInt(prompt("Ingresar el valor a calcular"))

    if( isNaN(valor) ){
        alert("El valor ingresado no es un número");
        return;
    }

    convercion = prompt(
        "A: Centímetros a pulgadas \n" +
        "B: Lbras a kilogramos \n" +
        "Ingresar A o B dependiendo del cálculo deseado"
    );

    convercion = convercion.toLowerCase();
    
    if( convercion == 'a' ){
        resultado = valor / 2.54;
        alert(valor + " centímetros son " + resultado.toFixed(3) + " pulgadas");
    }else if( convercion == 'b' ){
        resultado = valor / 2.205;
        alert(valor + " libras son " + resultado.toFixed(3) + " kilogramos");
    }else{
        alert("Valor de converción INCORRECTO");
        return;
    }

}

function ejercicio16(){

    let num = '';
    let dia = '';

    num = parseInt(prompt("Ingrese un número del 1 al 7"));

    if( num >= 1 && num <= 7 ){
        switch ( num ){
            case 1:
                dia = 'Lunes';
            break;
            case 2:
                dia = 'Martes';
            break;
            case 3:
                dia = 'Miercoles';
            break;
            case 4:
                dia = 'Jueves';
            break;
            case 5:
                dia = 'Viernes';
            break;
            case 6:
                dia = 'Sábado';
            break;
            case 7:
                dia = 'Domingo';
            break;
        }
    }else{
        console.log("Número fuera de rango");
        return;
    }

    alert(dia);
}

function ejercicio17(){
    let hora = '';

    hora = prompt("Ingrese la hora en formato hh:mm:ss");

    const horaFormateada = new Date(`2000-01-01T${hora}`);

    horaFormateada.setSeconds( horaFormateada.getSeconds() + 1 );

    const horaResultante = horaFormateada.toLocaleTimeString([], { hour12: false });
    
    alert(horaResultante);

}


function ejercicio18(){

    let cantidad = '';
    let precio = '';
    let comision = 0.0825;

    cantidad = parseInt(prompt("Ingresar cantidad a comprar"));

    if( cantidad > 0 && cantidad <= 9 ){
        precio = 10;
    }else if (cantidad >= 10 && cantidad <=99 ){
        precio = 8;
    }else if (cantidad >= 100 && cantidad <= 499){
        precio = 7;
    }else{
        precio = 6;
    }

    comision = (cantidad * precio ) * comision;

    alert(
        "Precio Final a Pagar: S/" + cantidad * precio + "\n \n" + 
        "Comisión del Vendedor: S/" + comision.toFixed(2)
        )

}

function ejercicio19(){

    let identificador = '';
    let dias = '';
    let sueldo = '';

    identificador = parseInt(prompt(
        "Ingresar el tipo de empleado: \n" +
        "1: Cajero \n" +
        "2: Servidor \n" +
        "3: Preparador de mezclas \n" +
        "4: Mantenimiento"
    ));

    if( identificador != 1 && identificador != 2 && identificador != 3 && identificador != 4){
        alert("Identificador Invalido");
        return;
    }

    dias = parseInt(prompt("Ingresar cantidad de días trabajados"));

    if( dias <= 0 ){
        alert("Días mínimos 1")
        return;
    }else if( dias >= 7 ){
        alert("Días maximos 6")
        return;
    }

    switch ( identificador ){
        case 1:
            sueldo = 56;
        break;
        case 2:
            sueldo = 64;
        break;
        case 3:
            sueldo = 80;
        break;
        case 4:
            sueldo = 48;
        break;
    }

    alert("Sueldo a pagar: S/" + sueldo * dias);

}

function ejercicio20(){

    let num1 = '';
    let num2 = '';
    let num3 = '';
    let num4 = '';
    let cuadrado = '';
    let suma = ''
    let pares = '';
    let media = '';
    let mensaje = '';

    num1 = parseInt(prompt("Ingrese el primer número: "));
    num2 = parseInt(prompt("Ingrese el segundo número: "));
    num3 = parseInt(prompt("Ingrese el tercer número: "));
    num4 = parseInt(prompt("Ingrese el cuarto número: "));

    

    if( num1 % 2 === 0){
        pares ++;
    }

    if( num2 % 2 == 0){
        pares ++;
    }
    if( num3 % 2 == 0){
        pares ++;
    }
    if (num4 % 2 == 0){
        pares ++;
    }

    mensaje = "Números pares: " + pares;

    if( num1 > num2 && num1 > num3 && num1 > num4){
        mensaje += "\nEl mayor es " +  num1;
    }else if ( num2 > num1 && num2 > num3 && num2 > num4){
        mensaje += "\nEl mayor es " +  num2;
    }else if( num3 > num1 && num3 > num2 && num3 > num4){
        mensaje += "\nEl mayor es " +  num3;
    }else{
        mensaje += "\nEl mayor es " +  num4;
    }

    if( num3 % 2 == 0){
        cuadrado = Math.sqrt(num2).toFixed(2);
        mensaje += "\nEl cuadrado de " +  num2 + " es: " + cuadrado;
    }

    if( num1 > num4 ){
        media = ( suma = num1 + num2 + num3 + num4 ) / 4;
        mensaje += "\nLa media de los 4 es: " + media;
    }

    if( num2 > num3 ){
        if( num3 >= 50 && num3 <= 700 ){
            suma = num1 + num2 + num3 + num4;
            mensaje += "\nLa suma de los 4 es: " + suma;
        }
    }
    

    alert(mensaje);
}

function ejercicio21(){
    let num = '';
    let fact = 1;

    num = parseInt(prompt("Ingrese un número: "));

    
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    alert(" El factorial de " + num + " es: " + fact);

}

function ejercicio22(){

    let n = '';
    let suma = 0;

    n = parseInt(prompt("Ingrese un número: "));

    
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    alert("La suma de los " + n + " primeros números es " + suma );

}

function ejercicio23(){
    let n = '';
    let suma = 0;

    n = parseInt(prompt("Ingrese un número: "));

    
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }

    alert("La suma de los números impares menores o iguales a " + n + " es " + suma);

}

function ejercicio24(){

    let suma = 0;

    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
          suma += i;
        }
    }
    alert("La suma de todos los números pares hasta el 1000 es: " + suma);
}

function ejercicio25(){

    function factorial(n) {
        if (n === 0) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
    }

    const n = parseInt(prompt("Ingrese un número: "));
    const resultado = factorial(n);

    alert("El factorial de " + n + " es " + resultado );

}

function ejercicio26(){
    let dividendo = '';
    let divisor = '';
    let cociente = 0;
    let resto = 0;

    dividendo = parseInt(prompt("Ingrese el dividendo: "));
    divisor = parseInt(prompt("Ingrese el divisor: "));

    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        cociente++;
    }

    resto = dividendo;

    alert(
        "El cociente es: " + cociente + "\n" +
        "El resto es: " + resto
    )

}

function ejercicio27(){
    let suma = 0;
    let conteo = 0;
    let numero = '';

    
    numero = parseInt(prompt("Ingrese un número positivo (o un número negativo para salir): "));

    
    while (numero >= 0) {
        suma += numero;
        conteo++;
        
        numero = parseInt(prompt("Ingrese otro número positivo (o un número negativo para salir): "));
    }

    
    if (conteo > 0) {
        const media = suma / conteo;
        alert("La media de los números ingresados es: " + media );
    } else {
        alert("No se ingresaron números positivos");
    }
}

function ejercicio28(){

    let suma = 0;
    let contador = 1;

    
    do {
        suma += contador;
        contador++;
    } while (contador <= 100);

    alert("La suma de los primeros 100 números es: " + suma );
}

function ejercicio29(){
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
    suma += contador;
    contador++;
    }

    alert("La suma de los primeros 100 números es: " + suma );
}

function ejercicio30(){
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert("La suma de los primeros cien números es: " + suma );
}

function ejercicio31(){
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 0; i < 10; i++) {

        let num = parseInt(prompt("Ingresa un número:"));

        if (num % 2 === 0) {
            sumaPares += num;
            contadorPares++;
        } else {
            sumaImpares += num;
            contadorImpares++;
        }
    }

    let mediaPares = sumaPares / contadorPares;
    let mediaImpares = sumaImpares / contadorImpares;

    alert(
        "La media de los números pares es: " + mediaPares + "\n" +
        "La media de los números impares es: " + mediaImpares 
    );
}

function ejercicio32(){
    const poblacion = {
        provincia1: {
          ciudad1: 0,
          ciudad2: 0,
          ciudad3: 0,
          ciudad4: 0,
          ciudad5: 0,
          ciudad6: 0,
          ciudad7: 0,
          ciudad8: 0,
          ciudad9: 0,
          ciudad10: 0,
          ciudad11: 0,
        },
        provincia2: {
          ciudad1: 0,
          ciudad2: 0,
          ciudad3: 0,
          ciudad4: 0,
          ciudad5: 0,
          ciudad6: 0,
          ciudad7: 0,
          ciudad8: 0,
          ciudad9: 0,
          ciudad10: 0,
          ciudad11: 0,
        },
        provincia3: {
          ciudad1: 0,
          ciudad2: 0,
          ciudad3: 0,
          ciudad4: 0,
          ciudad5: 0,
          ciudad6: 0,
          ciudad7: 0,
          ciudad8: 0,
          ciudad9: 0,
          ciudad10: 0,
          ciudad11: 0,
        },
      };
      
    for (const provincia in poblacion) {
        alert("Ingrese la población de las ciudades de " + provincia);
        for (const ciudad in poblacion[provincia]) {
            const poblacionCiudad = parseInt(prompt(`${ciudad}:`));
            poblacion[provincia][ciudad] = poblacionCiudad;
        }
    }
      
      
    for (const provincia in poblacion) {
        let ciudadMasPoblada = "";
        let poblacionMasAlta = 0;
        for (const ciudad in poblacion[provincia]) {
          if (poblacion[provincia][ciudad] > poblacionMasAlta) {
            poblacionMasAlta = poblacion[provincia][ciudad];
            ciudadMasPoblada = ciudad;
          }
        }
        alert("La ciudad más poblada de " + provincia + " es" + ciudadMasPoblada + " con " +  poblacionMasAlta + " habitantes");
    }
}

function ejercicio33(){
    let num = '';
    let continuar = '';

    do {
    num = parseInt(prompt("Ingresar número"));
    continuar = prompt("¿Desea continuar? (s/n)").toLowerCase();

    } while (continuar === "s");
}

function ejercicio34(){
    for (let i = 1; i <= 9; i++) {
        alert("Tabla del " + i + ":");
        for (let j = 1; j <= 10; j++) {
          alert(i + "x" + j + "=" +  i*j);
        }
        alert("");
    }
}

function ejercicio35(){

    let numeros = [];

    for(let i = 1; i <= 20; i++){
        let num = parseInt(prompt("Ingrese el número " + i));
        numeros.push(num);
    }

    let mayor = numeros[0];
    let menor = numeros[0];

    for(let i = 1; i < numeros.length; i++){

        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }

    alert(
        "El número mayor es: " + mayor + "\n" +
        "El número menor es: " + menor
    );
}


function ejercicio36(){
    function fibonacci(n) {
        let fibo = [0, 1];
    
        for (let i = 2; i < n; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
    
        return fibo;
    }
    
    alert(fibonacci(10));
}

function ejercicio37(){

    let num1 = '';
    let num2 = '';

    num1 = parseInt(prompt("Ingresar Número: "));
    num2 = parseInt(prompt("Ingresar Número: "));

    function euclides(a, b) {
        if (b === 0) {
          return a;
        } else {
          return euclides(b, a % b);
        }
    }

    alert("el M.C.D de " + num1 + " y " + num2  + " = " + euclides(num1, num2));

}

function ejercicio38(){

    let num = '';
    let sumaDiv = '';

    num = parseInt(prompt("Ingresa un número:"))

    for (let i = 1; i <= num/2; i++) {
        if (num % i == 0) {
            sumaDiv += i;
        }
    }

    if (sumaDiv == num) {
        alert(num + " es un número perfecto");
    } else {
        alert(num + " no es un número perfecto");
    }

}

function ejercicio39(){
    let pi = 0;
    for(let i = 1; i < 1000000; i += 2) {
      pi += 4/i;
      pi -= 4/(i+2);
    }
    alert(pi);
}

function ejercicio40(){
    let pi = 3;
    let signo = -1;
    let j = 2;
    
    for (let i = 0; i < 10; i++) {
      let denominador = j * (j + 1) * (j + 2);
      pi += signo * (4 / denominador);
      signo *= -1;
      j += 2;
    }
    
    alert("El valor aproximado de pi es: " + pi );
}