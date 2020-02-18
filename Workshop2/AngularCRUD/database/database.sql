-- Create a new database called 'DatabaseName'
CREATE DATABASE ng_users_db;
 
USE ng_users_db;
 
 
 CREATE TABLE  users(
     id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(255),
     last_name VARCHAR(255),
     image VARCHAR(200),
     register_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

DESCRIBE game;