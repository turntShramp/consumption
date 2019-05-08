DROP DATABASE IF EXISTS consumption_db;
CREATE DATABASE consumption_db;
USE consumption_db;
CREATE TABLE things (
  id int(10) NOT NULL AUTO_INCREMENT,
  thing_name varchar(250) NOT NULL,
  digested int(1) DEFAULT 0,
  PRIMARY KEY (id)
); 