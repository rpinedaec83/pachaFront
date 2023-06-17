Primer reto

TÍTULO: Maquetación Web ¿Por qué validar formularios? EL PROBLEMA E INSUMOS: Los formularios son Interfaces (capa de comunicación entre el usuario y la computadora) que permiten enviar información del usuario al sistema. Pudiéndose enviar, por ejemplo, un nombre, un apellido, una fecha de nacimiento, un número de cuenta, etc. Cuando se envían los datos, el sistema que los recibe espera los formatos correspondientes por cada tipo de dato. Si enviamos un nombre esperará un string, si enviamos una fecha esperará un formato de fecha, si enviamos un número esperará un número. El error se genera cuando enviemos información incorrecta en los campos, o sea, si en un campo que tienes que enviar un dato tipo string envías un número. También evitaremos las inyecciones SQL (SQL Injection es una falla en la codificación de una aplicación cualquiera (web o local) que posibilita por medio de un input cualquiera, la manipulación de una consulta SQL.). 
PREGUNTAS: 
• ¿Para qué sirve la validación de formularios?
 La validación de formularios es una herramienta importante para garantizar la calidad y seguridad de los datos ingresados en los formularios en línea, y para mejorar la experiencia del usuario al reducir la probabilidad de errores y malentendidos.
 • ¿Cuáles son los problemas al no validar un formulario?
 -Recibir datos falsos
 -Recibir datos que contienen caracteres especiales
 -Recibir datos que no corresponden a dicho formulario
  • ¿Cuáles son los beneficios?
  -Evitar que se ingresen caracteres especiales o scripts en campos que no están destinados a ellos, lo que podría causar problemas de seguridad o funcionamiento en el servidor o la aplicación.
  -Asegurarse de que los usuarios completen correctamente los campos del formulario, de modo que los datos enviados sean precisos, consistentes y útiles.