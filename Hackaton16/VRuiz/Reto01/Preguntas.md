# Reto 1:
## TÍTULO: ¿POR QUÉ UTILIZAR UN ADMINISTRADOR DE ESTADO?

###  Definición

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

## PREGUNTAS:

<span style="color:skyblue">1. *¿Qué es Redux?*</span>

- Redux es una biblioteca de administración de estado de código abierto para aplicaciones JavaScript. Fue originalmente creado para manejar el estado de aplicaciones web con React, pero también se puede utilizar con otros frameworks o librerías de JavaScript. Redux se basa en el patrón de diseño Flux y se centra en la gestión del estado de una aplicación de forma predecible y controlada.


<span style="color:skyblue">1. *¿Qué es Vuex?*</span>

- Vuex, por otro lado, es una biblioteca de administración de estado inspirada en Redux, pero específicamente diseñada para ser utilizada con Vue.js, un framework de JavaScript para la construcción de interfaces de usuario. Al igual que Redux, Vuex utiliza un store centralizado para almacenar el estado de una aplicación y las mutaciones para cambiar ese estado de forma controlada.


<span style="color:skyblue">1. *¿Por qué usar un administrador de estado?*</span>

- La principal razón para usar un administrador de estado, como Redux o Vuex, es manejar la complejidad del estado en una aplicación de forma más eficiente y predecible. A medida que las aplicaciones web se vuelven más grandes y complejas, el estado tiende a extenderse por múltiples componentes y puede volverse difícil de rastrear y mantener. Un administrador de estado centralizado ayuda a mantener un flujo unidireccional de datos, lo que facilita el seguimiento y la depuración de los cambios de estado. 





