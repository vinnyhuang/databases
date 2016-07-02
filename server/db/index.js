var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

module.exports = {
  postUser: function(name) {
    // console.log('INSERT INTO users (name) VALUES (\'' + name + '\');');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'chat'
    });
    connection.connect();

    connection.query('INSERT INTO users (name) VALUES (\'' + name + '\');', function(err, rows) {
      console.log('inside postuser query', err);
    });

    connection.end();
    console.log('connection ended from userpost');
  },

  postMessage: function(name, message, room) {
    console.log('in DB handler', name, message, room);

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'chat'
    });
  
    connection.connect();

    connection.query('INSERT INTO messages (username) VALUES (7);'), function(err, rows) {
      console.log('postmessage cb');
      if (err) { throw err; }
    };
    // connection.query('INSERT INTO messages (message) VALUES (\'hi\');', function(err, rows) {
    //   //'VALUES (SELECT id FROM users WHERE name=\'Valjean\', \'' + message + '\');', function(err, rows) {
    //   // 'VALUES (1, \'Valjean\');', function(err, rows) {
    //   if (err) { return log('error happened', err); }
    //   console.log('maybe wrote a message');
    // });

    connection.end();
    console.log('connection ended from message post');
  }
};