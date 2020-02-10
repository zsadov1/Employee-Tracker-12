const connection = require('./connection');


class Db {
	constructor(connection) {
		this.connection = connection;
	}
	createEmployee(employee) {
		return this.connection.query('INSERT INTO employee SET ?', employee);
	}
	createRole(role) {
		return this.connection.query('INSERT INTO role SET ?', role);
	}
	createDepartment(department) {
		return this.connection.query('INSERT INTO department SET ?', department);
	}
	viewAllEmployees() {
		return this.connection.query(
			"SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
		);
	}

	viewAllRoles() {
		return this.connection.query(
			' SELECT role.id, role.title, department.name, role.salary FROM role LEFT JOIN department on role.department_id = department.id'
		);
	}
	  viewAllDepartments() {
		const data = connection.query('SELECT * FROM department', function (error, results, fields) {
			console.log('RESULTS', results);  
			console.log('FIELDs', fields); 
			console.log("ERROR", error);
			return results;


		   });
		   return data; 
	}
	deleteEmployee(employeeId) {
		return this.connection.query('DELETE FORM  employee WHERE id = ?', employeeId);
	}
	deleteRole(roleId) {
		return this.connection.query('DELETE FORM role WHERE id = ?', roleId);
		
	}
	deleteDepartment(departmentId) {
		return this.connection.query('DELETE FORM  department WHERE id = ?', departmentId);
	}
}

module.exports = new Db(connection);




