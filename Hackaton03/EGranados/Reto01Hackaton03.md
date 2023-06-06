# Reto 01

##	¿Para qué sirve la validación de formularios?

Para validar el tipo de dato que vamos a enviar mediante el formulario y evitar errores de tipo con la base de datos y evitar inyecciones SQL.

##	¿Cuáles son los problemas al no validar un formulario?

Se generan errores al conectarse a una base de datos, por ejemplo ingresar cadenas de texto en un String, números en texto, etc. También podemos sufrir de inyecciones SQL. 

##	¿Cuáles son los beneficios?

Garantizar que los datos ingresados por los usuarios cumplas con las condiciones antes de enviarlas a los servidores web. Evita errores de procesamiento de datos y ahorra tiempo en procesar los datos.