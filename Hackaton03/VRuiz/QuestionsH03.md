# Maquetación Web
## ¿Por qué validar formularios?
### EL PROBLEMA E INSUMOS:

Los formularios son Interfaces (capa de comunicación entre el usuario y la computadora) que permiten enviar información del usuario al sistema. Pudiéndose enviar, por ejemplo, un nombre, un apellido, una fecha de nacimiento, un número de cuenta, etc.

Cuando se envían los datos, el sistema que los recibe espera los formatos correspondientes por cada tipo de dato. Si enviamos un nombre esperará un string, si enviamos una fecha esperará un formato de fecha, si enviamos un número esperará un número. El error se genera cuando enviemos información incorrecta en los campos, o sea, si en un campo que tienes que enviar un dato tipo string envías un número. También evitaremos las inyecciones SQL (SQL Injection es una falla en la codificación de una aplicación cualquiera (web o local) que posibilita por medio de un input cualquiera, la manipulación de una consulta SQL.).

<span style="color:skyblue"> *PREGUNTAS:* </span>

 <span style="color:skyblue">1. *¿Para qué sirve la validación de formularios?*</span>

-  Sirve para verificar que la información ingresada, sea correcta y coherente de acuerdo a lo que se requiere en cada campo.

<span style="color:skyblue">2. *¿Cuáles son los problemas al no validar un formulario?*</span>

- Si el usuario intenta enviar los datos, el navegador bloquea el formulario y despliega un mensaje de error. 
- No se podrá verificar la información ingresada.

<span style="color:skyblue">3. *¿Cuáles son los beneficios?*</span> 

- Nos permite tener contacto con el usuario de manera más deirecta.
