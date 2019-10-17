CREATE DATABASE cuidaTuMascota_db

USE cuidaTuMascota_db

CREATE TABLE Persona(
    idPersona INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(45),
    primerApellido VARCHAR(45),
    segundoApellido VARCHAR(45),
    rol VARCHAR(45),
    estado BIT,
    idHORARIO INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DESCRIBE Persona;