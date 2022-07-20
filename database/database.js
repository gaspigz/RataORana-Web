let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sqlsvpass',
  database: 'rataorana'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

module.exports = connection; //CON ESTO OBTENGO LA CONEXION Y HAGO CONSULTAS