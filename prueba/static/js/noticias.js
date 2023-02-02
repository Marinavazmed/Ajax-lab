$(document).ready(function () {
    /*Petición ajax para rellenar con todas las noticias*/
    $.ajax({
        url: '/noticias/',
        type: "GET",
        dataType: "json",
        success: (data) => {
            var indice = 0;
            for (let i of data.context) {
                indice++;

                $("body").append("<div id=noticia" + indice + "></div>")
                $("#noticia" + indice).append("<h1>Página de noticias</h1><h2>" + i.titular + "</h2><p>" + i.resumen + "</p><button>" + "+" + "</button><h4>" + i.descripcion + "</h4>")
            }
            $("body").append("<input type=text id=filtro>")
            /*Evento toggle button*/
            $("button").click(function() {
                $(this).next().toggle()
            })

            /*Inserción de botón de filtrado + evento de filtrado*/
            $("body").append("<button id='btn_filtro'>Filtrar noticia</button>")

            $("#btn_filtro").click(function () {
                var filtro = $("#filtro").val()
                $.ajax({
                    url: '/noticias/',
                    type: "GET",
                    data:{
                        'filtro': filtro,
                    },
                    dataType: "json",
                    success: (data) => {
                        $("body").empty()
                        var indice = 0;
                        for (let i of data.context) {
                            indice++;

                            $("body").append("<div id=noticia" + indice + "></div>")
                            $("#noticia" + indice).append("<h1>" + i.titular + "</h1><p>" + i.resumen + "</p><button>" + "+" + "</button><h4>" + i.descripcion + "</h4>")

                        }
                        /*Evento toggle button*/
                        $("button").click(function() {
                            $(this).next().toggle()
                        })
                    }
                });
            });
        },
        error: (error) => {
            console.log(error);
        }
    });
})
