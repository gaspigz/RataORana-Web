let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net  ',
  user: 'b90f5c9af5ac2f',
  password: '1dbd35cb',
  database: 'heroku_a378eaa9a80f3a9'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

module.exports = connection; //CON ESTO OBTENGO LA CONEXION Y HAGO CONSULTAS