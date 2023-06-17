# Hackaton 02 Reto 1

## 1. ¿Para qué sirve la validación de formularios?

La validación de formularios sirve para poder asegurarnos de que el usuario ingrese el tipo de información correcta a cada formulario y no se generen posibles errores, ya sea por parte del usuario o por parte de la base de datos.

## 2. ¿Cuáles son los problemas al no validar un formulario?

Si no se valida un formulario, se puede enviar un valor equivocado a la base de datos, como una string a un campo de números, etc. Otro problema que se puede generar al no validar un formulario, es que estamos expuestos a una sql injection.

## 3. ¿Cuáles son los beneficios?

Algunos de los beneficios, son que así nos aseguramos de que nuestra base de datos, de ser el caso, obtenga los valores correctos que estamos esperando, un string a un campo de string, un integer a un campo de integer, etc.
Otro beneficio es que así creamos una capa mas de seguridad para proteger nuestra información (database).
