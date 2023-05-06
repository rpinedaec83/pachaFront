# **Reto 01 Hackaton 06**

## **El Problema:**

Al desarrollar páginas o sistemas grandes, nuestro css empezará a crecer y el mantenimiento, al hacerse en un solo documento, se dificultará, las líneas de código 
aumentaran, pudiendo llegar a tener documentos css con más de 1000 líneas de código y la legibilidad de este empezará a complicarse. Para problemas así, tenemos los pre procesadores, estos nos permiten dividir el código en partes. Estas partes estarán definidas por las piezas del sistema, también nos ayudan con funciones, manejo de estructuras más legibles y la reutilización de código.

## **Preguntas y Respuestas:**

## **¿Por qué usar un pre-procesador?**

La razón por la que usarías un preprocesador CSS es para añadir funcionalidades adicionales que de otro modo CSS no tendría. Por ejemplo, podrías tener selectores de anidado o descendencia, así como los mixins (conjuntos de propiedades reutilizables). Se hacen cargo de funciones adicionales para permitirte ser más eficiente en tu trabajo diario y ofrecerte más escalabilidad.

![Por qué usar preprocesadores?](https://www.acens.com/comunicacion/wp-content/images/2016/07/wp-presprocesadores-css-acens-1.jpg)



## **¿Cuáles son los principales pre-procesadores?**

| Less                               | Sass                                | Stylus                               |
|------------------------------------|-------------------------------------|--------------------------------------|
| Fue creado en el año 2009 por `Alexis Sellier` y está escrito completamente utilizando el lenguaje JavaScript. Se caracteriza por contar con una sintaxis muy parecida a CSS regular, además de contar con una comunidad de usuarios muy grande y activa. Una de sus ventajas es que tiene una curva de aprendizaje muy rápida, gracias sobre todo a la gran cantidad de material que nos podemos encontrar. Less es utilizado en algunos proyectos como `Twitter`, `Boostrap` y `Joomla 3`.     |      Se trata de otro de los preprocesadores más utilizados hoy en día. Fue creado en el año 2007 por `Hampton Carlin` y está escrito mediante Ruby. Dentro de Sass nos encontramos con dos versiones de sintaxis diferente: `.SCSS` y `.SASS`. Cuenta con una gran comunidad tras su espalda y muchos recursos de aprendizaje web.     |      Este preprocesador fue creado por `Learn Boost` en el año 2010. Está escrito en JavaScript y tiene las mayorías de características contenidas en Sass y Less, pero con una sintaxis más sencilla y flexible. Stylus es el `menos utilizado` de los tres.    |

![Principales Preprocesadores](https://www.acens.com/comunicacion/wp-content/images/2016/07/wp-presprocesadores-css-acens-3.jpg)



## **¿Cuáles son los beneficios?**

- **Facilita la escritura de CSS:** 
> Los preprocesadores como `Sass`, `Less` o `Stylus` permiten utilizar `variables`, `funciones`, `mixins`, anidamiento de selectores y otras características que hacen que la escritura de CSS sea más sencilla y eficiente. Estas características pueden ahorrar tiempo y reducir la cantidad de código necesario para lograr el mismo resultado.


- **Mantiene el código más organizado:** 
> Permiten el uso de anidamiento de selectores, lo que significa que los selectores de CSS pueden organizarse de manera jerárquica y estructurada. Esto facilita la lectura y comprensión del código y reduce la posibilidad de errores.


- **Mejora la reutilización de código:** 
> Los preprocesadores permiten el uso de `mixins` y `funciones`, que permiten definir bloques de código que se pueden reutilizar en varias partes del código. Esto significa que el código se puede escribir una sola vez y utilizarlo en diferentes partes del sitio web.


- **Permite la modularización del código:** 
> Los preprocesadores permiten la creación de archivos CSS separados que se pueden importar en el archivo principal. Esto hace que el código sea más modular y más fácil de mantener y actualizar.


- **Permite la generación automática de CSS:** 
> Los preprocesadores como Sass también permiten la creación de archivos CSS a partir de archivos Sass utilizando herramientas como `gulp`, `grunt`, `webpack`, entre otros. Esto significa que los cambios en los archivos Sass se pueden compilar automáticamente en archivos CSS, lo que facilita el proceso de desarrollo.

![Beneficios de usar preprocesadores](https://www.acens.com/comunicacion/wp-content/images/2016/07/wp-presprocesadores-css-acens-1.png)