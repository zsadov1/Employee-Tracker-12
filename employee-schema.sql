DROP DATABASE IF EXISTS Employee_TrackerDB

CREATE DATABASE Employee_TrackerDB


CREATE TABLE department(
    id INTEGER auto_increment not null, 
    name VARCHAR(30) not null,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER auto_increment not null,
    title VARCHAR(30) not null,
    salary DECIMAL not null
);

CREATE TABLE employee(
    id INTEGER auto_increment not null,
    first_name VARCHAR(30) not null, 
    last_name  VARCHAR(30) not null,
    role_id INTEGER not null
);