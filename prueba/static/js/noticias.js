$(document).ready(function () {
    $.ajax({
        url: '/noticias/',
        type: "GET",
        dataType: "json",
        success: (data) => {
            var indice = 0;
            for (let i of data.context) {
                indice++;

                $("body").append("<div id=noticia" + indice + "></div>")
                $("#noticia" + indice).append("<h1>" + i.titular + "</h1>")
                $("#noticia" + indice).append("<p>" + i.resumen + "</p>")
                $("#noticia" + indice).append("<button id=btn_noticia" + indice + ">+</button>")
                $("#noticia" + indice).append("<h4>" + i.descripcion + "</h4>")

                $("#btn_noticia" + indice).click(function () {
                        $(this).next().toggle()
                    }
                )


            }
            $("btn_filtro").click(function(){
                console.log("filtrar")
            })
        },
        error: (error) => {
            console.log(error);
        }
    });
})
