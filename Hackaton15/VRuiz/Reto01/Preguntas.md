# Reto 1:
## TÍTULO: CRESPONSABILIDAD DEL MANEJO DE RUTAS

###  Definición
Cuando creamos sistemas tendremos que definir rutas, estas rutas ejecutarán una
funcionalidad, esta funcionalidad será un componente.
El enrutador será el encargado de definir las rutas y las funciones a ejecutarse. También
nos ayudará con el direccionamiento a través de funciones para el manejo del historial.
A través del enrutador podremos definir rutas protegidas, donde cualquiera no podrá
acceder. Los enrutadores son responsables de la definición de rutas y rutas anidadas,
también podremos proteger las rutas y enviar parámetros a través de estas.
En Vue.js utilizamos vue-router.

## PREGUNTAS:

<span style="color:skyblue">1. *¿Cuáles son las responsabilidades de un manejador de rutas?*</span>

1. *Enrutamiento de solicitudes:*  La principal responsabilidad de un manejador de rutas es recibir las solicitudes de los clientes y determinar qué función o controlador debe manejar esa solicitud en particular.

2. *Manejo de parámetros:*  En muchos casos, las rutas pueden contener parámetros variables, como identificadores de recursos o valores de consulta.

3. *Validación de rutas:* El manejador de rutas puede llevar a cabo la validación de rutas para asegurarse de que las solicitudes entrantes cumplan con los requisitos esperados.
 
4. *Definición de reglas de enrutamiento:* El manejador de rutas permite definir y configurar las reglas de enrutamiento en la aplicación o API.

5. *Manejo de errores de ruta:* Si una solicitud entra con una ruta no válida o no coincide con ninguna regla de enrutamiento, el manejador de rutas puede manejar y responder a esos errores de manera adecuada, devolviendo un código de estado HTTP apropiado o una página de error personalizada. 


<span style="color:skyblue">2. *¿Para qué sirve un manejador de rutas?*</span>

Un manejador de rutas en programación es esencial para implementar una estructura organizada y coherente en una aplicación web o API. Algunos de los beneficios y utilidades son:

1. *Separación de responsabilidades:*  El enrutador de rutas permite separar la lógica de enrutamiento de la lógica de negocio de la aplicación.

2. *Escalabilidad y mantenibilidad:* Al utilizar un manejador de rutas, es más fácil agregar nuevas funcionalidades a una aplicación sin afectar el enrutamiento existente.

3. *Organización del código:* El enrutador de rutas ayuda a mantener una estructura ordenada y coherente en el código de una aplicación, al proporcionar un lugar centralizado para definir y administrar las reglas de enrutamiento.

4. *Control y manipulación de solicitudes:* Un manejador de rutas permite un mayor control sobre las solicitudes entrantes y proporciona flexibilidad para manipular y transformar los datos antes de que se pasen a las funciones o controladores correspondientes.







