const app = function () {
    let urOMDb = "https://www.omdbapi.com/";
    const apikey = "1905e990";
    function sl() {
        $('.modal').modal('show');
    }
    function hl() {
        $('.modal').modal('hide');
    }
    let eventos = function () {
        $("#btnBuscar").on("click", function(e) {
            e.preventDefault();
            buscarPelicula();
        });
        $('#table').on('click-cell.bs.table', function (field, value, row, $element) {
            if(value === 'imdbID'){
                buscarInfoPelicula(row)
            }
          })
    }

    function buscarInfoPelicula(imdbID){
        fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}`).then(
            response => response.json()
        ).then(
            json=>dibujarPelicula(json)
            
        );

    }
function dibujarPelicula(data){
    Swal.fire({
        title: `<strong>${data.Title}</strong>`,
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}
    let cargarInformacionInicial = function () {
        fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=Mave`).then(
            response => response.json()
        ).then(
            json=>console.log(json)
        );
    }
    function cargarTabla(data){
        var $table = $('#table')
        $table.bootstrapTable('load',data)
    }
    function buscarPelicula(){

        let pelicula = $("#searchinput").val();
        var $table = $('#table')
        fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${pelicula}`).then(
            response => response.json()
        ).then(
            json=>cargarTabla(json.Search)
        );
    }
    return {
        init: function (parametros=null) {
            urOMDb = parametros.urOMDb
            eventos();
            cargarInformacionInicial();
        }
    }
}();