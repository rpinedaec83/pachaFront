# **Hackaton 15 Reto 01**

## **TÍTULO: RESPONSABILIDAD DEL MANEJO DE RUTAS**

### **Definición**

Cuando creamos sistemas tendremos que definir rutas, estas rutas ejecutarán una
funcionalidad, esta funcionalidad será un componente.

El enrutador será el encargado de definir las rutas y las funciones a ejecutarse. También
nos ayudará con el direccionamiento a través de funciones para el manejo del historial.

A través del enrutador podremos definir rutas protegidas, donde cualquiera no podrá
acceder. Los enrutadores son responsables de la definición de rutas y rutas anidadas,
también podremos proteger las rutas y enviar parámetros a través de estas.

En Vue.js utilizamos vue-router.

## **PREGUNTAS:**

### **¿Cuáles son las responsabilidades de un manejador de rutas?**

Las responsabilidades de un manejador de rutas en una aplicación web pueden variar dependiendo del framework o biblioteca utilizada, pero generalmente incluyen lo siguiente:

| Mapeo de rutas | Procesamiento de solicitudes| Gestión de métodos HTTP | Control de flujo |
|----------------------------|----------------------------|----------------------------|----------------------------|
| El manejador de rutas define las rutas disponibles en la aplicación web y establece una relación entre una URL específica y la función o controlador que se encargará de procesarla. Por ejemplo, puede asignar la ruta `"/usuarios"` a una función que se encargue de mostrar una lista de usuarios. | Cuando un cliente realiza una solicitud a una URL específica, el manejador de rutas se encarga de analizar esa URL y determinar qué función o controlador debe ser llamado para manejarla. Esto implica extraer parámetros de la URL si es necesario y pasarlos a la función correspondiente. | Un manejador de rutas también se encarga de asociar métodos `HTTP` específicos, como `GET`, `POST`, `PUT`, `DELETE`, entre otros, con las funciones o controladores adecuados. Esto permite definir diferentes acciones o comportamientos para una misma ruta, dependiendo del método HTTP utilizado. | Además de dirigir las solicitudes a las funciones o controladores correspondientes, el manejador de rutas puede llevar a cabo otras tareas relacionadas con el control de flujo de la aplicación. Por ejemplo, puede realizar validaciones previas a la ejecución de una función, gestionar el acceso a determinadas rutas basado en permisos de usuario o realizar redirecciones a otras `URLs`. |


### **¿Para qué sirve un manejador de rutas?**

Un manejador de rutas, también conocido como enrutador o router, es una parte crucial en el desarrollo de aplicaciones web. Su principal función es dirigir y controlar las solicitudes del usuario a diferentes partes de la aplicación en función de la URL solicitada. A continuación, se presentan algunas de las principales razones por las que se utiliza un manejador de rutas:

1. **Enrutamiento:** Un manejador de rutas permite establecer reglas y patrones para determinar cómo se deben manejar las solicitudes de diferentes URL en una aplicación web. Permite asociar una URL con una funcionalidad o acción específica que se ejecutará al acceder a esa URL. Por ejemplo, cuando un usuario visita la URL `"/inicio"`, el manejador de rutas sabe qué función o controlador debe ejecutar para mostrar la página de inicio correspondiente.

2. **Navegación entre páginas:** Un manejador de rutas facilita la navegación entre diferentes páginas o vistas de una aplicación web. Permite definir rutas para diferentes secciones o vistas de la aplicación, lo que permite a los usuarios acceder y cambiar entre ellas de manera intuitiva. Por ejemplo, una aplicación de comercio electrónico puede tener rutas para mostrar la página de inicio, la página de productos, la página de carrito de compras, etc.

3. **Parámetros dinámicos:** Las rutas pueden contener parámetros dinámicos que permiten pasar información específica a la aplicación. Por ejemplo, en una URL como `"/productos/123"`, el manejador de rutas puede extraer el valor `"123"` como un parámetro que indica un identificador de producto específico. Esto permite que la aplicación reciba información adicional y la utilice para mostrar datos relevantes al usuario.

4. **Redirecciones y control** de errores: Un manejador de rutas puede manejar redirecciones cuando una URL ha cambiado o se ha movido a otra ubicación. Esto ayuda a mantener la compatibilidad con versiones anteriores y a dirigir al usuario a la ubicación correcta. Además, el enrutador también se encarga de manejar errores cuando una URL no coincide con ninguna ruta definida, mostrando páginas de error adecuadas.

5. **Control de acceso y autenticación:** Un manejador de rutas puede implementar funciones de control de acceso y autenticación en una aplicación web. Puede verificar si el usuario tiene los permisos adecuados para acceder a una determinada ruta o recurso. Esto ayuda a proteger partes sensibles de la aplicación y a garantizar que solo los usuarios autorizados puedan acceder a ellas.
