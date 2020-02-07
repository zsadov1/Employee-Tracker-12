
// const inquirier = require("inquirer");
// const connection = require('./db/connection');
// const consoleTable = require("console.table");



// const viewOptions = [
//     "View Departments",
//     "View Roles",
//     "View Employees",
//     "Update Employee",
//     "Add an Employee",
//     "Add a Department",
//     "Add a Role",
//     "Exit"
// ];

// const employeeOptions =[
//     "Zach Sadovszky",
//     "Christian Bryant",
//     "Micheal Levy",
//     "Jon Angot",
//     "Gavin Mcgrath",
//     "Ryan Pillsbury",
//     "Exit"

// ];

// const updateOptions = [
//     "First Name",
//     "Last Name",
//     "Role",
//     "Exit"
// ];

// function runSearch() {
//     inquirier.prompt ({
//         name:"action",
//         type: "list",
//         message: "What would you like to do?",
//         choices: viewOptions
//     })
//     .then(function(answer) {
//         switch(answer.action) {
//             case viewOptions[0]:
//                 departmentView();
//                 break;

//             case viewOptions[1]:
//                 roleView();
//                 break;

//             case viewOptions[2]:
//                 employeeView();
//                 break;

//             case viewOptions[3]:
//                 updateEmployee();
//                 break;

//             // case viewOptions[5]:
//             //     addEmployee();
//             //     break;
//             // case viewOptions[6]:
//             //     addDepartment();
//             //     break;
//             // case viewOptions[7]:
//             //     addRole();
//             //     break;
//             case viewOptions[8]:
//                 exitApp();
//                 break;
//         }
//     })
// }

// function departmentView() {
//     let sqlStr = 'SELECT * FROM department';
//     connection.query(sqlStr, function(err, result) {
//         if(err) throw err;

//         console.table(result)
//         runSearch();
//     })
// }

// function employeeView() {
//     let sqlStr = "SELECT * FROM employee";
//     // sqlStr += 
//     // sqlStr += 
//     connection.query(sqlStr, function(err, result) {
//         if(err) throw err;

//         console.table(result)
//         runSearch();
//     })
// }

// function roleView() {
//     let sqlStr = 'SELECT * FROM role';
//     connection.query(sqlStr, function(err, result) {
//         if(err) throw err;

//         console.table(result)
//         runSearch();
//     })
// }

// function exitApp() {
//     console.log("Goodbye!")
//     connection.end();
    
// }

// runSearch();

// const updateEmployee = () => {
//     function runUpdateSearch() {
//         inquirier.prompt({
//             name: "action",
//             type:"list",
//             message:"Which employee do you want to update?",
//             choices: employeeOptions
//         })
//     }
//     runUpdateSearch(); 
// }

const { prompt } = require('inquirer');
const table = require('console.table');
const db = require('./db');

async function runSearch() {
    const { choice } = await prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [ 
            {
                name: 'View All Employees',
                value: 'VIEW_EMPLOYEES'
            },
            {
                name: 'View All Employees By Department',
                value: 'VIEW_EMPLOYEES_BY_DEPARTMENT'
            },
            {
                name: 'View All Employees By Manager',
                value: 'VIEW_EMPLOYEES_BY_MANAGER'
            },
            {
                name:'Add Employee',
                value:'ADD_EMPLOYEE' 
            },

            {
                name:'Remove Employee',
                value:'REMOVE_EMPLOYEE' 
            },
            {
                name:'Update Employee Role',
                value:'UPDATE_EMPLOYEE_ROLE' 
            },
            {
                name: 'Update Employee Manager',
                value: 'UPDATE_EMPLOYEE_MANAGER'
            },
            {
                name:'View All Roles',
                value:'VIEW_ROLEs' 
            },
            {
                name:'Add Role',
                value:'ADD_Role' 
            },
            {
                name:'Remove Role',
                value:'REMOVE_ROLE' 
            },
            {
                name:'View All Departments',
                value:'VIEW_DEPARTMENTS' 
            },
            {
                name:'Add Department',
                value:'VIEW_DEPARTMENTS' 
            },
            {
                name:'Remove Department',
                value:'REMOVE_DEPARTMENTS' 
            },
            {
                name:'Quit',
                value:'QUIT' 
            }
        ]
    }
]);
// Switch statement to call functions based on the users selection

    switch(choice) {
        case 'VIEW_EMPLOEES':
            return viewEmployee();
        case 'VIEW_EMPLOYEES_BY_DEPARTMENT':
            return viewEmployeebyDepartment();
        case 'ADD_EMPLOYEE':
            return addEmploee();
        case 'REMOVE_EMPLOYEE':
            return removeEmployee();
        case 'UPDATE_EMPLOYEE_ROLE':
            return updateEmployeeRole();
        case 'VIEW_DEPARTMENTS':
            return  viewDepsrtments();
        case 'ADD_DEPARTMENTS':
            return ADDdEPARTMENTS();
        case 'REMOVE_DEPARTMENTS':
            return removeDepartments();
        case 'VIEW_ROLES':
            return addRole();
        case 'ADD_ROLES':
            return addRoles();
        case 'REMOVE_ROLES':
            return removeRole();
        default:
            return quit();
            
    }
}

// All add functions

async function addRole() {
    const departments = await db.findAllDepartment();
    const departmentChoices = department.map(({id, name}) => ({
        name: name,
        value: id
    }));
    const role = await prompt([
        {
            name: 'title',
            message: 'What is the name of the role?'
        },
        {
            name: 'salary',
            message: 'What is the salery of the role?'
        },
        {
         type:'input',
         name:'department_id',
         message:'Which department does the role belong to?',
         choices: departmentChoices
        }
    ]);
    await DataCue.createRole(role);
    console.log(`added ${role.title} to the database`);
}

async function addEmployee() {
    const departments = await db.findAllDepartment();
    const departmentChoices = department.map(({id, name}) => ({
        name: name,
        value: id
    }));
    const role = await prompt([
        {
            name: 'title',
            message: 'What is the name of the employee?'
        },
        {
            name: 'last name',
            message: "What is the new employee's last name?"
        },
        {
            name:'role',
            message: 'What is your role?'
        },
        {
         type:'list',
         name:'department_id',
         message:'Which department does the role belong to?',
         choices: departmentChoices
        }
    ]);
    await db.createRole(employee);
    console.log('Added ${employee.title} to the database');
}

async function addDepartment() {
    const departments = await db.findAllDepartment();
    const departmentChoices = department.map(({id, name}) => ({
        name: name,
        value: id
    }));
    const role = await prompt([
        {
            name: 'title',
            message: 'What is the department?'
        }
    ]);
    await db.createDeparmtment(department);
    console.log('Added ${department.title} to the database');
}

// View functions

async function viewEmployee() {
    const viewEmployeeData = await db.findAllEmployees();

    cconsole.table(viewEmployeeData);
}
async function viewDepartment() {
    const viewDepartmentData = await db.findAllDepartment();

    cconsole.table(viewDepartmentData);
}
async function viewRole() {
    const viewRoleData = await db.findAllRole();

    cconsole.table(viewRoleData);
}

// Remove functions 

async function removeDepartment() {
    const departments = await db.findAllDepartment();
    const departmentChoices = department.map(({id, title}) => ({
        name: name,
        value: id
    }));
    const {departmentId} = await prompt([
        {
            type: 'list',
            name: 'departmentId',
            message: 'What department do you want to delete?',
            choices: departmentChoices
        }
    ]);
    await db.deleteDepartment(departmentId);
}

async function removeRole() {
    const roles = await db.findAllRole();
    const roleChoices = roles.map(({id, title}) => ({
        name: name,
        value: id
    }));
    const {roleId} = await prompt([
        {
            type: 'list',
            name: 'roleId',
            message: 'What role do you want to delete?',
            choices: roleChoices
        }
    ]);
    await db.deleteRole(roleId);
}

async function removeEmployee() {
    const employees = await db.findAllEmployees();
    const employeeChoices = employees.map(({id, title}) => ({
        name: name,
        value: id
    }));
    const {employeeId} = await prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'What employee do you want to delete?',
            choices: employeeChoices
        }
    ]);
    await db.deleteEmployee(employeeId);
}
runSearch();









