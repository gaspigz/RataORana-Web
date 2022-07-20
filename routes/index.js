const express = require('express');
const router = express.Router(); //EL ENCARGADO DE CREAR LAS RUTAS
const pool  = require('../database/database'); //CONEXION A DB

router.get('/',async(req, res) => {
    //res.sendFile(__dirname + '/views/login.html'); //LO MANDA AL ARCHIVO login.html LA RUTA DEBE SER ABSOLUTA __dirname es el lugar desde donde se ejecuta
    // ASI LO ENVIARIAMOS SIN EJS // res.sendFile(path.join(__dirname, 'views/login.html')); //UNE AL DIRNAME CON EL LOGIN PERO NO DEPENDE DEL SO
    //EL ARCHIVO DEJA DE SER HTML Y ES EJS PARA QUE SEA PROCESADO POR EJS
    await pool.query('SELECT * FROM imagenes WHERE id=1', function(err, results){
        if(results.length == 0){
            console.log('No hay imagenes con ese ID');
        }
            else{
                console.log('URL IMAGEN: '+results[0]['imgurl']);         
            }
    }) //EL AWAIT HACE QUE ESPERE A QUE SE TERMINE DE HACER PARA CONTINUAR
    res.render('index.html'); 

})//A LA DIRECCION RAIZ LO MANDA A TAL LUGAR

module.exports = router;