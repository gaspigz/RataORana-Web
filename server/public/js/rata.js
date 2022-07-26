$(document).ready(function () {
    var counter1 = 0;
    var interval1 = setInterval(function(){
        var opVal1 = 0;
        if(counter1 <= 100){
            opVal1 = counter1/10;
            $('.nombre').css('opacity', opVal1);
            counter1++;
        }else{
            clearInterval(interval1);
        }
    }, 10);


$('#btn-rata').click(function (e) {
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
    url: '/sumarata',
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

var counter2 = 0;
    var interval2 = setInterval(function(){
        
        if(counter2 == 1){
            location.reload();
        }
        counter2++;
    }, 1200);
});

$('#btn-rata2').click(function (e) {
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
    url: '/sumarata',
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

var counter2 = 0;
    var interval2 = setInterval(function(){
        
        if(counter2 == 1){
            location.reload();
        }
        counter2++;
    }, 1200);
});

});