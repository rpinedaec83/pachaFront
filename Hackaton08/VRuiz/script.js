tresDigitos(
let num;
        num = prompt('Ingrese un valor entero');
        num = parseInt(num);
        if (num == 0) {
            document.alert(prompt('El número ingresado es cero'));
        } else {
            if (num > 0) {
                document.alert(prompt('El número ingresado es positivo'));
            } else {
                document.alert(prompt('El número ingresado es negativo'));
            }
        }
        )