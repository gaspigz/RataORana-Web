const express = require('express');
const router = express.Router(); //EL ENCARGADO DE CREAR LAS RUTAS
const pool  = require('../database/database'); //CONEXION A DB

router.get('/',async(req, res) => {
    //res.sendFile(__dirname + '/views/login.html'); //LO MANDA AL ARCHIVO login.html LA RUTA DEBE SER ABSOLUTA __dirname es el lugar desde donde se ejecuta
    // ASI LO ENVIARIAMOS SIN EJS // res.sendFile(path.join(__dirname, 'views/login.html')); //UNE AL DIRNAME CON EL LOGIN PERO NO DEPENDE DEL SO
    //EL ARCHIVO DEJA DE SER HTML Y ES EJS PARA QUE SEA PROCESADO POR EJS
    let id = getRandomInt(1,14);
    await pool.query('SELECT * FROM imagenes WHERE id=?',[id], function(err, results){
        if(results.length == 0){
            console.log('No hay imagenes con ese ID');
        }
            else{
                console.log('URL IMAGEN: '+results[0]['imgurl']); 
                let uname = results[0]['name'];
                let totalVotos = results[0]['ratavotes'] + results[0]['ranavotes'];
                let porcentajeRata = Math.floor((results[0]['ratavotes'])*100/totalVotos);
                let porcentajeRana = Math.floor((results[0]['ranavotes'])*100/totalVotos);
                if (porcentajeRata + porcentajeRana != 100){
                    console.log('algo anda mal');
                    porcentajeRana = 100-porcentajeRata;
                }
                console.log('porcentajeRata: '+porcentajeRata + ' porcentajeRana: '+porcentajeRana);
                res.render('index.html',{
                    name: uname,
                    imgurl: results[0]['imgurl'],
                    votosrata: porcentajeRata,
                    votosrana: porcentajeRana
                });        
            }
    }) //EL AWAIT HACE QUE ESPERE A QUE SE TERMINE DE HACER PARA CONTINUAR

   
     

});//A LA DIRECCION RAIZ LO MANDA A TAL LUGAR

router.post('/sumarata', async(req, res) => {
    console.log(req.body.imgurl);
    let imgurl = req.body.imgurl;
    console.log('URL IMAGEN POR BTNRAT: '+imgurl);
    await pool.query('UPDATE imagenes SET ratavotes=ratavotes+1 WHERE imgurl = ?', [imgurl], function(err, results){
        if(err){
            console.log(err);
        }
        else{
            console.log('Imagen actualizada');
        }
    });
    res.redirect('/');
});

router.post('/sumarana', async(req, res) => {
    console.log(req.body.imgurl);
    let imgurl = req.body.imgurl;
    console.log('URL IMAGEN POR BTNRAN: '+imgurl);
    await pool.query('UPDATE imagenes SET ranavotes=ranavotes+1 WHERE imgurl = ?', [imgurl], function(err, results){
        if(err){
            console.log(err);
        }
        else{
            console.log('Imagen actualizada');
        }
    });
    res.redirect('/');
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

module.exports = router;