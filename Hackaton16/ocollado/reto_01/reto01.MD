# ¿POR QUÉ UTILIZAR UN ADMINISTRADOR DE ESTADO?

Al implementar una arquitectura orientada a componentes, cada uno de los
componentes manejan su propio estado y la comunicación entre estos en aplicaciones muy grandes será muy difícil de resolver.
Para resolver este problema, existen un patrón que nos ayudará a centralizar el estado y administrarlo, este patrón se llama Redux.
A través de redux podremos compartir los estados de nuestra aplicación y escuchar los valores desde cualquier componente.
El framework vue tiene su propia implementación usando este patrón, la librería en mención se llama vuex.
Esta nos provee de métodos y helpers para el manejo y manipulación de los estados.

***

## PREGUNTAS:
- ¿Qué es Redux?

  Redux es una biblioteca de administración de estado predecible para aplicaciones JavaScript, especialmente aquellas que siguen la arquitectura de componentes. Proporciona un enfoque de flujo unidireccional para administrar el estado de una aplicación, lo que facilita el seguimiento de cómo y cuándo cambia el estado a lo largo del tiempo.

  Redux se basa en tres principios fundamentales:

  1. **Única fuente de verdad**: El estado de toda la aplicación se almacena en un solo objeto llamado "store". El estado completo de la aplicación se representa como un árbol en el store, lo que facilita la comprensión y la depuración.

  2. **El estado es de solo lectura**: El estado almacenado en el store no se puede modificar directamente. En su lugar, se deben enviar acciones (objetos planos) que describan los cambios que se desean realizar en el estado. Las acciones son capturadas por funciones llamadas "reducers", que actualizan el estado en función de las acciones recibidas.

  3. **Los cambios se realizan mediante funciones puras**: Los reducers son funciones puras que toman el estado actual y una acción como argumentos, y devuelven un nuevo estado. No deben realizar ninguna operación de lado, como llamadas a la API o mutaciones directas del estado.

  Redux se utiliza comúnmente con bibliotecas de interfaz de usuario como React, pero también se puede utilizar con otros frameworks o incluso con JavaScript puro.

- ¿Qué es Vuex?

  Vuex es una biblioteca de administración de estado para aplicaciones Vue.js. Al igual que Redux, Vuex se basa en el patrón de diseño de flujo unidireccional para administrar el estado de la aplicación.

  En una aplicación Vue.js, Vuex actúa como un "almacén centralizado" para el estado compartido. Permite que los componentes accedan al estado de la aplicación de forma reactiva, sin la necesidad de pasar props a través de múltiples niveles de componentes.

  Vuex proporciona las siguientes características:

  1. **State**: Almacena el estado de la aplicación en un objeto centralizado y reativo llamado "store".

  2. **Mutations**: Define mutaciones que modifican el estado en el store. Las mutaciones deben ser funciones puras y se llaman mediante acciones.

  3. **Actions**: Las acciones son funciones que realizan operaciones asíncronas o interacciones más complejas antes de llamar a las mutaciones para modificar el estado. Las acciones pueden contener lógica empresarial y se pueden llamar desde los componentes.

  4. **Getters**: Los getters son métodos que proporcionan acceso a los valores calculados o derivados del estado del store. Son útiles cuando se necesitan datos transformados o filtrados en los componentes.

  Vuex simplifica el manejo del estado en aplicaciones Vue.js y promueve una estructura organizada y mantenible.

- ¿Por qué usar un administrador de estado?

  Existen varias razones por las que utilizar un administrador de estado, como Redux o Vuex, puede ser beneficioso en el desarrollo de aplicaciones:

  1. **Centralización del estado:** Un administrador de estado permite centralizar y consolidar el estado de la aplicación en un único lugar. Esto facilita la comprensión y el seguimiento de cómo cambia el estado a lo largo del tiempo.

  2. **Facilita el flujo de datos:** Al utilizar un enfoque