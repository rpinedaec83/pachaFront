# RETO 01 PREGUNTAS: 

## ¿Qué es Redux? 

- Redux es una biblioteca de gestión de estado ampliamente utilizada en aplicaciones de JavaScript, incluyendo aquellas basadas en Vue.js. Proporciona un patrón y una arquitectura predecibles para gestionar el estado de una aplicación de forma centralizada. Redux se basa en tres principios fundamentales: un solo origen de verdad (single source of truth), el estado es de solo lectura (state is read-only) y los cambios se realizan mediante funciones puras (changes are made by pure functions) llamadas "reductores" (reducers). Redux se integra con Vue.js a través de una biblioteca adicional llamada "Vuex" para facilitar la gestión del estado en aplicaciones Vue.

## ¿Qué es Vuex?

- Vuex es una biblioteca de gestión de estado específicamente diseñada para aplicaciones Vue.js. Se basa en los conceptos de Redux, pero está adaptada para aprovechar las características y la sintaxis de Vue.js. Vuex proporciona un flujo de datos unidireccional y centralizado, utilizando un almacén (store) global para almacenar y administrar el estado de la aplicación. El almacén Vuex se puede acceder desde cualquier componente de la aplicación y permite realizar cambios en el estado de manera predecible a través de acciones y mutaciones.

## ¿Por qué usar un administrador de estado?

- Usar un administrador de estado como Redux o Vuex es beneficioso en aplicaciones complejas que requieren una gestión eficiente y controlada del estado. Algunas razones para usar un administrador de estado son:

* Centralización del estado: Un administrador de estado permite mantener todo el estado de la aplicación en un único lugar, lo que facilita su seguimiento y gestión.

* Flujo de datos unidireccional: Al utilizar un administrador de estado, el flujo de datos dentro de la aplicación se vuelve unidireccional y predecible, lo que simplifica el seguimiento y la depuración de los cambios de estado.

* Facilita el manejo de acciones asíncronas: Los administradores de estado proporcionan mecanismos para manejar acciones asíncronas de manera estructurada, lo que es especialmente útil cuando se trabaja con llamadas a API o operaciones de larga duración.

* Mejora la escalabilidad: Un administrador de estado facilita la escalabilidad de una aplicación al permitir la separación de la lógica del estado del resto de la lógica de los componentes. Esto facilita la reutilización de componentes y el mantenimiento de la aplicación a medida que crece en complejidad.

- En resumen, los administradores de estado como Redux y Vuex brindan una forma estructurada y predecible de gestionar el estado en aplicaciones Vue.js, centralizando el estado de la aplicación, facilitando el flujo de datos unidireccional y mejorando la escalabilidad y el manejo de acciones asíncronas.