$(document).ready(function () {
    /*Petición ajax*/
    $.ajax({
        url: '/prueba_examen/',
        type: "GET",
        dataType: "json",
        success: (data) => {
            $("body").append("<div id='todos-los-viajes'></div><h1>Subtitulo</h1><ul></ul>")
            for(let i of data.j_son){
                $("ul").first().append("<li></li>")
                $("li").last().append("<img src='"+i.src+"'/><p>"+i.desc+"</p><ul class='specs'></ul>")
                for(let j = 0; j<i.specs.length;j++){
                    $(".specs").last().append("<li>"+i.specs[j]+"</li>")
                }
                $(".specs").last().append()

                /*Ejercicio 9*/
                $("img").last().click(function(){
                    $(this).siblings().toggle()
                });
            }
        },
        error: (error) => {
            console.log(error);
        }
    });
})