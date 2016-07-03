var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/json'
};

module.exports = {
  messages: {
    options: function (req, res) {
      res.writeHead(204, headers);
      res.end();
    },

    get: function (req, res) {
      models.messages.get(function(data) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(data));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {     
      if (Object.keys(req.body).length !== 0) { // If data is passed through req.body
        models.messages.post(req.body.username, req.body.message, req.body.roomname);
        var header = Object.assign({}, headers);
        header['Content-Type'] = 'text/plain';
        res.writeHead(201, header);
        res.end('Posted successfully');
        return;
      }
      // Otherwise, data is passed in chunks.
      var body = '';
      req.on('data', function(chunk) {
        body += chunk;
      });

      req.on('end', function() {
        var pBody = JSON.parse(body);
        console.dir(pBody);
        models.users.get(function(usersCollection) {
          var userExists = false;
          for (var i = 0; i < usersCollection.length; i += 1) {
            if (usersCollection[i].name === pBody.username) {
              userExists = true;
            }
          }

          if (!userExists) {
            models.users.post(pBody.username);
          } 

          console.log(2);
          models.messages.post(pBody.username, pBody.message, pBody.roomname);
          var header = Object.assign({}, headers);
          header['Content-Type'] = 'text/plain';
          res.writeHead(201, header);
          res.end('Posted successfully');
        });
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(data) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username);
      var header = Object.assign({}, headers);
      header['Content-Type'] = 'text/plain';
      res.writeHead(201, header);
      res.end('Posted successfully');
    }
  }
};

