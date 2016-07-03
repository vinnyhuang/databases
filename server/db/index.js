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
  messages: {
    get: function(cb) {
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'chat'
      });

      connection.connect();
      connection.query('SELECT * FROM messages', function(err, rows) {
        if (err) { 
          throw err;
        }
        cb(rows);

      });
      connection.end();
    },
    post: function(name, message, room) {
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'chat'
      });
    
      connection.connect();

      connection.query('INSERT INTO messages (username, message, room) ' +
        'VALUES ((SELECT id FROM users where name=\'' + name + '\'), ' +
        '\'' + message + '\', ' + 
        '\'' + room + '\');', function(err, rows) {
        if (err) { throw err; }
      });
      // connection.query('INSERT INTO messages (message) VALUES (\'hi\');', function(err, rows) {
      //   //'VALUES (SELECT id FROM users WHERE name=\'Valjean\', \'' + message + '\');', function(err, rows) {
      //   // 'VALUES (1, \'Valjean\');', function(err, rows) {
      //   if (err) { return log('error happened', err); }
      //   console.log('maybe wrote a message');
      // });

      connection.end();
    }
  },

  users: {
    get: function(cb) {
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'chat'
      });

      connection.connect();
      connection.query('SELECT * FROM users', function(err, rows) {
        if (err) { 
          throw err;
        }
        cb(rows);

      });
      connection.end();
    },

    post: function(name) {
      // console.log('INSERT INTO users (name) VALUES (\'' + name + '\');');
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'chat'
      });
      connection.connect();

      connection.query('INSERT INTO users (name) VALUES (\'' + name + '\');', function(err, rows) {
      });

      connection.end();
    }
  }
};