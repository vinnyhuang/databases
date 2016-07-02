CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  username int NOT NULL,
  message varchar(8000),
  room varchar(255),
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */
INSERT INTO users (name)
VALUES ('bot');

INSERT INTO messages (username, message, room) 
VALUES (1, 'Welcome to chatterbox. Prepare to get chat on.', 'lobby');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

