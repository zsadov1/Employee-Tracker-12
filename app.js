const connection = require('./connection');
const inquirier = require("inquirer");
const consoleTable = require("console.table");
const introJS = require('./intro');
const viewJs = require('./view')




introJS = runSearch();

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
