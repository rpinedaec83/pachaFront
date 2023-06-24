<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Source code generated using layoutit.com">
        <meta name="author" content="LayoutIt!">

        <title>Hackaton 09</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>

    <body class="container-fluid">
        <div class="container-fluid">
            <div class="row pt-4">
                <div class="col-md-12">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="text-primary">
                                %titulo%
                            </h1>
                            <h3 class="font-weight-normal">
                                %descripcion%
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pb-5">
                %inputs%
                <div class="col-md-12 mb-4">
                    <h4 class="text-success">
                        Respuesta: <span class="text-dark" id="respuesta">%answer%</span>
                    </h4>
                </div>
                <div class="col-md-12">
                    <a href="/" class="btn btn-primary">
                        Volver al inicio
                    </a>
                </div>
            </div>
        </div>

        %script%

        <script
            src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
            crossorigin="anonymous">
        </script>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" 
            crossorigin="anonymous">
        </script>
    </body>
</html>