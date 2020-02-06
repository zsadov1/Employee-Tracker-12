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