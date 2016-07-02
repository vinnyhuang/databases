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
    get: function (req, res) {
      console.log('receiving messages get req');
      models.messages.get(function(data) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(data));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body.username, req.body.message, req.body.roomname);
      var header = Object.assign({}, headers);
      header['Content-Type'] = 'text/plain';
      res.writeHead(201, header);
      res.end('Posted successfully');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('receiving users get req');
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

