$(document).ready(function () {
    $('#btn-rata').click(function (e) {
        e.preventDefault(); //Hacemos que no se refresque la página por defecto.

        let imgurl = $('.img').style("background-image");
        $.ajax({
            url: 'http://localhost:3000/sumarata',
            type: 'POST',
            data: {
                imgurl: imgurl
            },
            dataType: 'json',
            success: function (response) {
                
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR);
            }
        });
    });


});