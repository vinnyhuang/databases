var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.messages.get(cb);
    }, // a function which produces all the messages
    post: function (name, message, room) {
      db.messages.post(name, message, room);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.users.get(cb);
    },
    post: function (name) {
      db.users.post(name);
    }
  }
};

