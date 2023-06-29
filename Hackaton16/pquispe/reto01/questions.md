# **Hackaton 16 Reto 01**

## ** ¿POR QUÉ UTILIZAR UN ADMINISTRADOR DE ESTADO?**

### **Definición:**

Al implementar una arquitectura orientada a componentes, cada uno de los
componentes manejan su propio estado y la comunicación entre estos en aplicaciones
muy grandes será muy difícil de resolver.

Para resolver este problema, existen un patrón que nos ayudará a centralizar el estado
y administrarlo, este patrón se llama Redux.

A través de redux podremos compartir los estados de nuestra aplicación y escuchar los
valores desde cualquier componente.

El framework vue tiene su propia implementación usando este patrón, la librería en
mención se llama vuex.

Esta nos provee de métodos y helpers para el manejo y manipulación de los estados.

## **PREGUNTAS:**

### **¿Qué es Redux?**
Redux es una biblioteca de administración de estado para aplicaciones `JavaScript`. Se utiliza comúnmente en aplicaciones de una sola página `(Single Page Applications)` y aplicaciones de frontend en general. Redux se basa en el patrón de diseño de arquitectura Flux y se puede usar con bibliotecas y marcos populares como `React`, `Angular` y `Vue.js`.

La principal idea detrás de Redux es centralizar y controlar el estado de una aplicación de manera predecible y mantenible. En lugar de almacenar el estado de la aplicación en múltiples componentes dispersos, Redux propone tener un único árbol de estado global que es accesible desde cualquier lugar de la aplicación. Esto facilita el seguimiento de los cambios en el estado y permite mantener un flujo de datos unidireccional y coherente.

El estado en Redux se almacena en un objeto inmutable llamado `"store"`. El store contiene el estado completo de la aplicación y solo puede ser modificado a través de acciones. Las acciones son objetos planos que describen un cambio en el estado. Los cambios en el estado se manejan mediante funciones llamadas `"reductores" (reducers)`, que toman el estado actual y una acción como entrada, y devuelven un nuevo estado modificado.

Redux también proporciona una funcionalidad llamada `"middleware"` que permite agregar capas adicionales de lógica entre las acciones y los reductores. Los middlewares pueden interceptar acciones, realizar tareas asíncronas y aplicar transformaciones adicionales antes de que los reductores procesen las acciones.


### **¿Qué es Pinia?**
Pinia es una biblioteca de administración de estado para aplicaciones `Vue.js`. Se inspira en el enfoque de Redux, pero está diseñada específicamente para ser utilizada con `Vue.js` y aprovechar las características y la sintaxis de este framework.

Pinia proporciona una forma sencilla y eficiente de administrar el estado de una aplicación `Vue.js`, utilizando un enfoque basado en el concepto de `"stores" (almacenes)`. Los almacenes en Pinia son objetos que contienen el estado de la aplicación y las acciones que pueden modificar ese estado. Cada almacén tiene su propio estado aislado y se puede acceder a él desde cualquier componente de la aplicación.

Una de las características clave de Pinia es su integración nativa con la reactividad de `Vue.js`. Esto significa que cuando se modifica el estado en un almacén, los componentes que dependen de ese estado se actualizan automáticamente para reflejar los cambios. Además, Pinia proporciona un sistema de seguimiento de dependencias eficiente, lo que significa que solo se vuelven a renderizar los componentes afectados por los cambios relevantes en el estado.

Pinia también ofrece características adicionales como soporte para acciones asíncronas, soporte para plugins y una `API` sencilla y expresiva para interactuar con los almacenes y el estado.


### **¿Por qué usar un administrador de estado?**

- **Centralización del estado:** Un administrador de estado permite centralizar y almacenar el estado de la aplicación en un único lugar, conocido como `store`. Esto facilita el acceso y la gestión del estado desde cualquier parte de la aplicación, evitando la dispersión del estado en diferentes componentes y mejorando la organización y mantenibilidad del código.

- **Mantenimiento del estado predecible:** Al utilizar un administrador de estado, se establecen reglas y patrones claros para actualizar y modificar el estado de la aplicación. Esto ayuda a mantener un flujo de datos unidireccional y predecible, lo que facilita la comprensión de cómo y por qué cambia el estado en la aplicación.

- **Comunicación entre componentes:** Los administradores de estado proporcionan un mecanismo para comunicar y compartir datos entre componentes de una manera más sencilla. Los componentes pueden suscribirse al estado del administrador de estado y recibir actualizaciones automáticas cuando el estado cambia. Esto evita la necesidad de pasar datos manualmente a través de múltiples capas de componentes y simplifica la comunicación entre ellos.

- **Gestión de acciones y efectos secundarios:** Los administradores de estado generalmente ofrecen un mecanismo para definir acciones, que son funciones que modifican el estado de la aplicación de manera controlada. Esto facilita la gestión de las interacciones del usuario, como eventos o solicitudes de red, y permite ejecutar lógica adicional antes o después de actualizar el estado.

- **Testing y depuración simplificados:** Al tener el estado centralizado y las acciones bien definidas, las pruebas y la depuración de la lógica de la aplicación se vuelven más simples. Es más fácil simular diferentes estados y acciones para probar diferentes escenarios y verificar el comportamiento de la aplicación en condiciones específicas.

- **Escalabilidad y reutilización:** Utilizar un administrador de estado puede mejorar la escalabilidad de una aplicación, ya que facilita la adición de nuevas funcionalidades y la gestión de un estado más complejo a medida que la aplicación crece. Además, los administradores de estado suelen ser reutilizables, lo que significa que se pueden utilizar en diferentes partes de la aplicación y en proyectos futuros, lo que ahorra tiempo y esfuerzo en el desarrollo.
