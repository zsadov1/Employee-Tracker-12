const connection = require('./connection');
const inquirier = require("inquirer");
const consoleTable = require("console.table");
const introJs = require('./intro')


const viewJs = function viewTables() {
    let sqlStr = 'SELECT * FROM department';
    connection.query(sqlStr, function(err, result) {
        if(err) throw err;

        console.table(result)
        introJs();
    })

function employeeView() {
    let sqlStr = "SELECT * FROM employee";
    // sqlStr += 
    // sqlStr += 
    connection.query(sqlStr, function(err, result) {
        if(err) throw err;
    
        console.table(result)
        introJs();
    })

function roleView() {
    let sqlStr = 'SELECT * FROM role';
    connection.query(sqlStr, function(err, result) {
        if(err) throw err;
    
        console.table(result)
        introJs();
    })
    };
    };
};



module.exports = viewJs