var primernumero = 0;
let segundonumero = 0;
let operacion = "";
let respuesta = 0;

primernumero = parseInt ("Escribe primer numero");
segundonumero = parseInt ("Escribe segundo numero");
operacion = prompt ("La operacion (suma, resta, multiplicacion, division)");

if (operacion=="suma") {
    respuesta=primernumero+segundonumero;
    }
    else if (operacion=="restar"){
        respuesta=primernumero-segundonumero;
    }
    else if (operacion=="multiplicacion"){
        respuesta=primernumero*segundonumero;
    }
    else if (operacion=="division"){
        respuesta=primernumero/segundonumero;
    }

alert("La " + operacion + " entre " +primernumero +" y " +segundonumero+ "es" + respuesta);