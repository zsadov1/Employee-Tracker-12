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
    salary DECIMAL not null,
    department_id INTEGER not null,
    CONSTRAINT fk_department_id foreign key (department_id) REFERENCES department(id),
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INTEGER auto_increment not null,
    first_name VARCHAR(30) not null, 
    last_name  VARCHAR(30) not null,
    role_id INTEGER not null,
    CONSTRAINT fk_role_id foreign key (role_id) REFERENCES role(id),
    manager_id INTEGER,
    CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id),
    PRIMARY KEY(id)
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
INSERT into role (title, salar, department_id)
values ("Legal", 50000, 4 );
INSERT into role (title, salary, department_id)
values ("Manager", 60000, 5 );

SELECT * from role

INSERT into employee(first_name, last_name, role_id)
values ("Zach" , "Sadovszky", 3);
INSERT into employee(first_name, last_name, role_id)
values ("Christian" , "Braynt", 4);
INSERT into employee(first_name, last_name, role_id)
values ("Mike" , "Levy", 5);
INSERT into employee(first_name, last_name, role_id)
values ("Jon" , "Angot", 6);
INSERT into employee(first_name, last_name, role_id)
values ("Gavin" , "Mcgrath", 7);
INSERT into employee(first_name, last_name, role_id)
values ("Ryan" , "Puillsbury", 8);

SELECT * from employee 