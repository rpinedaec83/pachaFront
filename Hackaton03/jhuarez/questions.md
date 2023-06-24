# PRIMER RETO : MAQUETACION WEB

¿Por qué validar formularios? EL PROBLEMA E INSUMOS: Los formularios son Interfaces (capa de comunicación entre el usuario y la computadora) que permiten enviar información del usuario al sistema. Pudiéndose enviar, por ejemplo, un nombre, un apellido, una fecha de nacimiento, un número de cuenta, etc. Cuando se envían los datos, el sistema que los recibe espera los formatos correspondientes por cada tipo de dato. Si enviamos un nombre esperará un string, si enviamos una fecha esperará un formato de fecha, si enviamos un número esperará un número. El error se genera cuando enviemos información incorrecta en los campos, o sea, si en un campo que tienes que enviar un dato tipo string envías un número. También evitaremos las inyecciones SQL (SQL Injection es una falla en la codificación de una aplicación cualquiera (web o local) que posibilita por medio de un input cualquiera, la manipulación de una consulta SQL.). 


## PREGUNTAS: 

- ¿Para qué sirve la validación de formularios? 

**Rpta** : La validacion de formularios es un proceso tecnico en el cual un formulario verifica si la informacion dada por el usuario es correcta.

El formulario alertara al usuario en el caso que haya colocado un dato erroneo para que lo pueda corregir, o el formulario sera validado.

- ¿Cuáles son los problemas al no validar un formulario? 

**Rpta** : Se necesita la validacion de formularios como una medida de seguridad. Los formularios son una victima facil de los hackers ya que estos formularios se sabe que estan conectados a una Base de Datos de alguna forma. Permitir que la gente coloque lo que sea en tu formulario nos deja vulnerables a ataques de SQL injection o algo peor.

Aparte de proteger contra los hackers, la validacion de formularios tambien nos puede ayudar de problemas que generan los mismos usaurios. Hay veces que los usuarios pueden poner valores ridiculos en el formulario y hacer crashear el sitio solo por que si.

- ¿Cuáles son los beneficios?

**Rpta** : Al hacer una validacion desde el lado del cliente se crea una mejor experiencia de usuario dado que el usuario puede corregir inmediatamente y no tiene que re-insertar la informacion en el formulario nuevamente (mayor tiempo de respuesta). Asimismo luego se puede hacer una verificacion del lado del servidor para estar seguros que la informacion es correcta.
