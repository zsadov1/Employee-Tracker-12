const connection = require('./connection');
const inquirier = require("inquirer");
const consoleTable = require("console.table");

const viewOptions = [
    "View Departments",
    "View Roles",
    "View Employees",
    "Update Employee",
    "Add an Employee",
    "Add a Department",
    "Add a Role",
    "Exit"
];


const employeeOptions =[
    "Zach Sadovszky",
    "Christian Bryant",
    "Micheal Levy",
    "Jon Angot",
    "Gavin Mcgrath",
    "Ryan Pillsbury",
    "Exit"

];

const updateOptions = [
    "First Name",
    "Last Name",
    "Role",
    "Exit"
];

const introJs = function runSearch() {
    inquirier.prompt ({
        name:"action",
        type: "list",
        message: "What would you like to do?",
        choices: viewOptions
    })
    .then(function(answer) {
        switch(answer.action) {
            case viewOptions[0]:
                departmentView();
                break;

            case viewOptions[1]:
                roleView();
                break;

            case viewOptions[2]:
                employeeView();
                break;

            case viewOptions[3]:
                updateEmployee();
                break;

            case viewOptions[5]:
                addEmployee();
                break;
            case viewOptions[6]:
                addDepartment();
                break;
            case viewOptions[7]:
                addRole();
                break
        }
    })
};

introJs();

module.exports = introJs