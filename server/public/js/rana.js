$(document).ready(function () {
    $('#btn-rana').click(function (e) {
        e.preventDefault(); //Hacemos que no se refresque la página por defecto.
    
        var counter = 0;
                var interval = setInterval(function(){
                    var opVal = 0;
                    if(counter <= 100){
                        opVal = counter/100;
                        $('.barra').css('opacity', opVal);
                        counter++;
                    }else{
                        clearInterval(interval);
                    }
                    
                }, 3);
    
        let imgurl = $('#imgurl').text();
        console.log(imgurl);
    
    
        $.ajax({
            url: '/sumarana',
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
    
        var counter3 = 0;
                var interval3 = setInterval(function(){
                    console.log('CONTADO3'+counter3);
                    if(counter3 == 1){
                        location.reload();
                    }
                    counter3++;
                }, 1200);
        
    });
    
    $('#btn-rana2').click(function (e) {
        e.preventDefault(); //Hacemos que no se refresque la página por defecto.
    
        var counter = 0;
                var interval = setInterval(function(){
                    var opVal = 0;
                    if(counter <= 100){
                        opVal = counter/100;
                        $('.barra').css('opacity', opVal);
                        counter++;
                    }else{
                        clearInterval(interval);
                    }
                    
                }, 3);
    
        let imgurl = $('#imgurl').text();
        console.log(imgurl);
    
    
        $.ajax({
            url: '/sumarana',
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
    
        var counter3 = 0;
                var interval3 = setInterval(function(){
                    console.log('CONTADO3'+counter3);
                    if(counter3 == 1){
                        location.reload();
                    }
                    counter3++;
                }, 1200);
        
    });
    
    });