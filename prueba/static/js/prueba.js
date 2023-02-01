$(document).ready(function () {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + "=")) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    $("#boton").click(function () {
        var diccionario = {nombre: $("#nombre").val(), apellidos: $("#apellidos").val()}
        var j_son = JSON.stringify(diccionario)

        $.ajax({
            url: '',
            type: "POST",
            dataType: "json",
            data: j_son,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRFToken": getCookie("csrftoken"),
            },
            success: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            }
        });
    })

        $("#muestra").click(function () {
          $.ajax({
            url: '',
            type: "GET",
            dataType: "json",
            success: (data) => {
                for(let i of data.context){
                    $("body").append("<p> Nombre: " + i.nombre + ", apellidos: " +i.apellidos + "</p>")
                }
            },
            error: (error) => {
              console.log(error);
            }
          });
    })

});
