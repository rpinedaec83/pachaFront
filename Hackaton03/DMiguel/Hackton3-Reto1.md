# Primer reto

## Maquetación Web

¿Por qué validar formularios? EL PROBLEMA E INSUMOS: Los formularios son Interfaces (capa de comunicación entre el usuario y la computadora) que permiten enviar información del usuario al sistema. Pudiéndose enviar, por ejemplo, un nombre, un apellido, una fecha de nacimiento, un número de cuenta, etc. Cuando se envían los datos, el sistema que los recibe espera los formatos correspondientes por cada tipo de dato. Si enviamos un nombre esperará un string, si enviamos una fecha esperará un formato de fecha, si enviamos un número esperará un número. El error se genera cuando enviemos información incorrecta en los campos, o sea, si en un campo que tienes que enviar un dato tipo string envías un número. También evitaremos las inyecciones SQL (SQL Injection es una falla en la codificación de una aplicación cualquiera (web o local) que posibilita por medio de un input cualquiera, la manipulación de una consulta SQL.).

### Preguntas

1. ¿Para qué sirve la validación de formularios?

     - La validación de formulario sirve para obtener los datos deseados, si no validamos el vormulario ya sea por frontend o backend, podemos validar un formulario ya sea por HTML, JS o el lenguaje que use el backend. En el caso de HTML podemos validar los datos usando el atributo type="text"  en las etiquetas input o tambien podemos usar los preformatos de pattern que nos permitira que el usuario ingrese un formato establecido, pero hay un problema si el usuario inspecciona vera el codigo html, y pudiendo modificar las validaciones y aqui es donde entra JS como segundo filtro de validacion; cuando el usuario le de al boton [subit] se ejecutaran en segundo plano funciones de validacion que veran si los inputs tiene los datos correctos y si en algun caso el usuario logra pasar este filtro, tendremos como ultimo filtro de validacion el backend para validar y alertar si hay alguna iregularidad en los datos recividos.
     

2. ¿Cuáles son los problemas al no validar un formulario? 

     - Si no tenemos filtros de validacion, primero en el html tendremos manipulacion para la salida de datos, hasta podiando hacer una Injection si tenemos un base de datos y teniendo que se filtren datos muy delicados.

3. ¿Cuáles son los beneficios?

     - Los veneficios de usar la validación de los formularios son que no nos llegara datos no deseados y evitamos Injection a nuestras base de datos.
