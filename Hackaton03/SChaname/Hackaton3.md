
## TÍTULO: Maquetación Web
### ¿Por qué validar formularios? 
### EL PROBLEMA E INSUMOS: 
## Los formularios son Interfaces (capa de comunicación entre el usuario y la computadora) que permiten enviar información del usuario al sistema. Pudiéndose enviar, por ejemplo, un nombre, un apellido, una fecha de nacimiento, un número de cuenta, etc.
## Cuando se envían los datos, el sistema que los recibe espera los formatos correspondientes por cada tipo de dato. Si enviamos un nombre esperará un string, si enviamos una fecha esperará un formato de fecha, si enviamos un número esperará un número. El error se genera cuando enviemos información incorrecta en los campos, o sea, si en un campo que tienes que enviar un dato tipo string envías un número. También evitaremos las inyecciones SQL (SQL Injection es una falla en la codificación de una aplicación cualquiera (web o local) que posibilita por medio de un input cualquiera, la manipulación de una consulta SQL.).
## PREGUNTAS:
-	¿Para qué sirve la validación de formularios?

### La validación de formularios nos proporciona como desarrolladores del sistema a validar los datos brindados de manera correcta y coherente que posiblemente entrarán en una base de datos. Como por ejemplo que nos salte un error al escribir un dígiot en un campo que solo acepta letras, etc. 

-	¿Cuáles son los problemas al no validar un formulario?

### Al no validar un campo se genera lo que sería un error en el tipo de dato que se le asignó al campo por ejemplo que le envies un dato tipo date a un campo tipo char y del mismo modo evitar las inyecciones SQL que serían una problemática por el cambio no intencionado de una consulta.

-	¿Cuáles son los beneficios?

### Uno de los mejores beneficios que genera la validación de formularios es que los datos que son enviados al servidor podrán ser manejados con facilidad ya que no hay un dato que interrumpa el proceso de almacenamiento en el servidor o la base de datos. Del mismo modo, permite al usuario contactarse de manera correcta con los datos proporcionados que adjuntó en los campos para posteriormente comunicarse o registrarse en una empresa o página web.