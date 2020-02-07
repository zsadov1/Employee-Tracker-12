DROP DATABASE IF EXISTS employees_trackdb;
CREATE DATABASE employees_trackdb;
USE employees_trackdb;


CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL, 
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, 
    INDEX dep_ind (department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);


CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, 
    INDEX role_ind (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    INDEX man_ind (manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
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
INSERT into role (title, salary, department_id, manager_id)
values ("Manager", 60000, 5 , 1);

SELECT * from role;

INSERT into employee(first_name, last_name, role_id, manager_id)
values ("Zach" , "Sadovszky", 6, 1);
INSERT into employee(first_name, last_name, role_id)
values ("Christian" , "Bryant", 3);
INSERT into employee(first_name, last_name, role_id)
values ("Mike" , "Levy", 4);
INSERT into employee(first_name, last_name, role_id)
values ("Jon" , "Angot", 5);
INSERT into employee(first_name, last_name, role_id)
values ("Gavin" , "Mcgrath", 1);
INSERT into employee(first_name, last_name, role_id)
values ("Ryan" , "Pillsbury", 2 );

SELECT * from employee;