const util = require('util')
const mysql = require('mysql')


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"!@Galaxy",
    database: "employee_trackdb"
});

connection.connect(function (err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

module.exports = connection; 