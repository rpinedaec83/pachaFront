# PREGUNTAS:
##	¿Para qué sirve la validación de formularios?
Sirve para enviar información del usuario al sistema como por ejemplo fechas, nombre, información detallada del usuario y etc.
Para evitar estos casos, se suele recurrir a un tipo de proceso automático llamado validación, en el cuál, establecemos unas pautas para que si el usuario introduce alguna información incorrecta, deba modificarla o en caso contrario no podrá continuar ni enviar el formulario correctamente.
## ¿Cuáles son los problemas al no validar un formulario?
El usuario puede escribir la información y el sistema no comprobará los datos, ni realizará ningún tipo de validación. Es el peor escenario posible, puesto que el usuario podría enviar desde información incorrecta, hasta datos malintencionados que podrían comprometer la seguridad de la página.
Otro caso podría ser que el formulario tiene validación sólo en el front-end (cliente). De esta forma, los datos son verificados en el navegador del usuario antes de enviarse, pero carecen de validación en el back-end, por lo que un usuario malintencionado podría eliminar la validación del front-end y saltársela, enviando datos malintencionados que comprometan la seguridad de la página.
Por último, tendríamos el caso ideal, donde el formulario tiene validación en el front-end y en el back-end, también denominado doble validación. En este caso, el formulario es sometido a un proceso de validación en la parte del front-end, y si lo supera, vuelve a pasar otro proceso de validación en el back-end. La desventaja de este método es que conlleva más trabajo de validación, pero es el sistema recomendado, puesto que es más estricto y sobre todo, más seguro.


## ¿Cuáles son los beneficios?
 
Los beneficios es que estas asegurando que la información que el usuario manda al servidor sea correcta y de tipo string como numérica y no haya conflictos para que luego esta infosea correctamente sea almacenada y utilizada mas adelante...
