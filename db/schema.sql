/*
mysql -u root -p < schema.sql

make a database called animals_db with an animals table, with an animal_name column.
*/


CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE animals (
    id INT AUTO_INCREMENT, 
    animal_name VARCHAR(255),
    PRIMARY KEY(id)
);