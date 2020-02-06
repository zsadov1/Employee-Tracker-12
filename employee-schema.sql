DROP DATABASE IF EXISTS Employee_TrackerDB;

CREATE DATABASE Employee_TrackerDB;

USE employee_trackerdb;


CREATE TABLE department(
    id INTEGER auto_increment not null, 
    name VARCHAR(30) not null,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER auto_increment not null,
    title VARCHAR(30) not null,
    salary DECIMAL not null,
    department_id INTEGER not null,
    CONSTRAINT fk_department_id foreign key (department_id) REFERENCES department(id),
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) not null, 
    last_name  VARCHAR(30) not null,
    role_id INT not null,
    manager_id INT null,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

SELECT * from employee;
SELECT * from role;
SELECT * from department;

INSERT into department (name)
VALUES ("Sales");
INSERT into department (name)
VALUES ("Engineering");
INSERT into department (name)
VALUES ("Finance");
INSERT into department (name)
VALUES ("Legal");
INSERT into department (name)
VALUES ("Manager");

SELECT * from department; 

INSERT into role (title, salary, department_id)
values ("Sales Lead", 50000 , 1 );
INSERT into role (title, salary, department_id)
values ("Salesperson", 40000 , 1 );
INSERT into role (title, salary, department_id)
values ("Lead Engineer", 50000, 2 );
INSERT into role (title, salary, department_id)
values ("Accountant", 50000, 3 );
INSERT into role (title, salary, department_id)
values ("Legal", 50000, 4 );
INSERT into role (title, salary, department_id)
values ("Manager", 60000, 5 );

SELECT * from role;

INSERT into employee(first_name, last_name, role_id)
values ("Zach" , "Sadovszky", 1);
INSERT into employee(first_name, last_name, role_id)
values ("Christian" , "Braynt", 2);
INSERT into employee(first_name, last_name, role_id)
values ("Mike" , "Levy", 3);
INSERT into employee(first_name, last_name, role_id)
values ("Jon" , "Angot", 4);
INSERT into employee(first_name, last_name, role_id)
values ("Gavin" , "Mcgrath", 5);
INSERT into employee(first_name, last_name, role_id)
values ("Ryan" , "Pillsbury", 6);

SELECT * from employee 