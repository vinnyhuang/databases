var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

module.exports = {
  postuser: function(name) {
    // console.log('INSERT INTO users (name) VALUES (\'' + name + '\');');
  
    connection.connect();

    connection.query('INSERT INTO users (name) VALUES (\'' + name + '\');', function(err, rows) {
    });

    connection.end();
  }
};