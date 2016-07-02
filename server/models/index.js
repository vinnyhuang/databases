var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (name, message, room) {
      db.postMessage(name, message, room);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (name) {
      db.postUser(name);
    }
  }
};

