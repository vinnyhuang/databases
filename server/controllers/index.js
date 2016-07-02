var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('trying to post');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('trying to post new user', req.body);
      // var body = '';
      // req.on('data', function(chunk) {
      //   console.log('processing data');
      //   body += chunk;
      // });

      // req.on('error', function(e) {
      //   console.log('erroring');
      // });

      // req.on('end', function() {
      //   console.log('req chunk ended now in end');
      //   models.users.post(username);
      // });
      models.users.post(req.body.username);

      console.log('past all req.on lines');
    }
  }
};

