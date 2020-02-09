const connection = require('./connection');
const db = require('./index');
const { prompt } = require('inquirer');
const table = require('console.table');



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
                name:'Add Employee',
                value:'ADD_EMPLOYEE' 
            },

            {
                name:'Remove Employee',
                value:'REMOVE_EMPLOYEE' 
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
        case 'VIEW_EMPLOYEES':
            return viewEmployee();
        case 'VIEW_DEPARTMENTS':
            return  viewDepartment();
        case 'VIEW_ROLES':
            return viewRole();
        case 'ADD_EMPLOYEE':
            return addEmployee();
        case 'ADD_DEPARTMENTS':
            return addDepartments();
        case 'ADD_ROLES':
            return addRole();            
        case 'REMOVE_EMPLOYEE':
            return removeEmployee();
        case 'REMOVE_ROLES':
            return removeRole();
        case 'REMOVE DEPARTMENT':
            return removeDepartment();
        case 'UPDATE_EMPLOYEE_ROLE':
            return updateEmployeeRole();

        default:
            return quit();
            
    }
}

// Add functions

async function addDepartment() {
    const departments = await db.findAllDepartment();
    const departmentChoices = department.map(({id, name}) => ({
        name: name,
        value: id
    }));
    let department = await prompt([
        {
            name: 'title',
            message: 'What is the department?'
        }
    ]);
    await db.createDeparmtment(department);
    console.log(`Added ${department.title} to the database`);
}

async function addRole() {
    const roles = await db.findAllRole();
    const roleChoices = roles.map(({id, name}) => ({
        name: name,
        value: id
    }));
    let role = await prompt([
        {
            name: 'title',
            message: 'What is the name of the role?'
        },
        {
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
         type:'input',
         name:'role_id',
         message:'Which department does the role belong to?',
         choices: roleChoices
        }
    ]);
    await db.createRole(role);
    console.log(`added ${role.title} to the database`);
}

async function addEmployee() {
    const employees = await db.findAllEmployees();
    const employeeChoices = employee.map(({id, name}) => ({
        name: name,
        value: id
    }));
    let employee = await prompt([
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
         name:'id',
         message:'Which department does the role belong to?',
         choices: employeeChoices
        }
    ]);
    await db.createEmployee(employee);
    console.log(`Added ${employee.title} to the database`);
}



// View functions

async function viewDepartment() {
    const viewDepartmentData = await db.viewAllDepartments();

    console.table(viewDepartmentData);

}

async function viewRole() {
        const viewRoleData = await db.viewAllRoles();
    
    console.table(viewRoleData);
}

async function viewEmployee() {
    const viewEmployeeData = await db.viewAllEmployees();

    console.table(viewEmployeeData);
}

// Remove functions 

async function removeDepartment() {
    const department = await db.deleteDepartment(departmentId);
    const departmentChoices = department.map(({id, title}) => ({
        name: title,
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
        name: title,
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
    const employee = await db.deleteEmployee(employeeId);

    const employeeChoices = employee.map(({id, title}) => ({
        name: title,
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

async function quit(){
    return connection.end();
}


runSearch();









