const inquirier = require("inquirer");
const connection = require('./connection');


const viewOptions = [
    "View Departments",
    "View Roles",
    "View Employees",
    "Update Employee",
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

const runSearch = function runSearch() {
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
                
            case updateOptions[4]:
                connection.end();
                break
        }
    })
};

function departmentView() {
    let sqlStr = 'SELECT * FROM department';
    connection.query(sqlStr, function(err, result) {
        if(err) throw err;

        console.table(result)
        runSearch();
    })
};




function employeeView() {
    let sqlStr = "SELECT * FROM employee";
    // sqlStr += 
    // sqlStr += 
    connection.query(sqlStr, function(err, result) {
        if(err) throw err;

        console.table(result)
        runSearch();
    })
};

function roleView() {
    let sqlStr = 'SELECT * FROM role';
    connection.query(sqlStr, function(err, result) {
        if(err) throw err;

        console.table(result)
        runSearch();
    })
};

runSearch();

const updateEmployee = () => {
    function runUpdateSearch() {
        inquirier.prompt({
            name: "action",
            type:"list",
            message:"Which employee do you want to update?",
            choices: employeeOptions
        })
    }
    runUpdateSearch(); 
};
