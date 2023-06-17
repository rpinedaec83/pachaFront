var express = require("express");
// generar nuestra app
var app = express();

// acceder a la variable de entorno PUERTO o usar 3000 por default
var puerto = process.env.PUERTO || 3000;

app.get("/", function (peticion, respuesta) {
  respuesta.send(`
        <html>
            <head></head>
            <body>
                <p>Pagina de inicio!</p>
            </body>
        </html>
    `);
});

app.get("/matricula/:id/", function (peticion, respuesta) {
    respuesta.send(`
            <html>
                <head></head>
                <body>
                    La matricula es ${peticion.params.id}
                </body>
            </html>
        `);
    });

// ejecutar listener en el puerto 3000
app.listen(puerto);