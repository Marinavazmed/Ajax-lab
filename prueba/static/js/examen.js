$(document).ready(function () {
    /*Petición ajax*/
    $.ajax({
        url: '/prueba/',
        type: "GET",
        dataType: "json",
        success: (data) => {
            $("#contenido").append("<div id='todos-los-viajes'></div>")
            $("#todos-los-viajes").append("<h1>Viajes Guía Incluido</h1><ul></ul>")
            for (let i of data.j_son) {
                $("ul").append("<li class='viaje-" + i.clase_pais + "'></li>")
                $(".viaje-" + i.clase_pais).append("<h2>" + i.ciudad_h2 + "</h2><span class='detalle'>" + i.detalle_precio_total +
                    " por " + i.detalle_num_noches + " noches</span>")
                $(".viaje-" + i.clase_pais).append("<span class='por-noche'><span class='precio'> " + i.precio_noche + "</span>/noche </span>")
                $(".viaje-" + i.clase_pais).append("<button class=reserva>Reservalo ya!</button>")
                $(".viaje-" + i.clase_pais).append("<li class='fotos'></li>")
                $("li").last().append("<img src='" + i.ruta_imagen + "'><span>" + i.pie_imagen + "</span>")

                var timeout_detalle = ""
                /*Evento para descuento*/
                $(".viaje-" + i.clase_pais).hover(function () {
                    timeout_detalle = setTimeout(function () {
                        $(".viaje-"+i.clase_pais).find('.detalle').text("DESCUENTO DEL 10%!!");
                        console.log("TIMEOUT!!")
                    }, 2000);
                }, function () {
                    /*Para el timeout cuando sale*/
                    clearTimeout(timeout_detalle)
                })


                $("img").last().hover(function () {
                    /*Funcion de entrada*/
                    $(".por-noche").addClass("descatado")
                }, function () {
                    /*Funcion de salida*/
                    $(".por-noche").removeClass("descatado")
                })

                /*evento de esconder-enseñar imagenes*/
                $("img").last().click(function () {
                    $(this).next().toggle()
                })


            }
        },
        error: (error) => {
            console.log(error);
        }
    });
})
