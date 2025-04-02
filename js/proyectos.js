    $(document).ready(function () {
        $.getJSON("../utils/json/proyectos.json", function(info){
            $.each(info, function (i, datos) { 
                 $("#postContainer").append(`<div class="postCard">
                    <img src="${datos.img}" />
                    <div>
                        <a href="${datos.url}" target="_blank"><h3>${datos.proyecto}</h3></a>
                        <p>${datos.descripcion}</p>
                        <div class="postTarget">
                            <h6>Etiquetas: </h6>
                            ${
                                datos.etiquetas.map(function (item) {
                                    return `<a href="#">${item}</a>`;
                                })
                            }
                        </div>
                    </div>
                    </div>`)
            });
        }
        );
    });



