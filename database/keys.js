//ESTE ARCHIVO TIENE LA CONFIGURACION DE MI BASE DE DATOS
//Exportamos un objeto con las configuraciones de la DB
module.exports = {
    database: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'sqlsvpass',
        //port: '3306',
        database: 'fmanangerdb'
    }
};