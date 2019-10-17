CREATE DATABASE cuidaTuMascota_db;

USE cuidaTuMascota_db;

CREATE TABLE Usuario(
    idUsuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(40),
    UserName VARCHAR(15),
    Pass VARCHAR(25),
    Estado BIT,
    TipoUsuario VARCHAR(45)
);
DESCRIBE Usuario;

CREATE TABLE Persona(
    idPersona INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombres VARCHAR(60),
    PrimerApellido VARCHAR(45),
    SegundoApellido VARCHAR(45),
    Estado BIT,
    idHorario INT,
    idUsuario INT,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);
DESCRIBE Persona;



