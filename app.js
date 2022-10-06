const inquirer = require('inquirer');
const db = require('./db/connection')
const cTable = require('console.table');
const {addDep, addRole, addEmp, updateEmp} = require('./db/functions')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Choose an option.',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then(answers => {
        switch(answers.options) {
            case 'View all departments':
                db.query(`SELECT * FROM department;`, (err, rows) => {
                    console.table(rows);
                });
                break;
            case 'View all roles':
                db.query(`SELECT role.*, department.name AS department_name
                        FROM role
                        LEFT JOIN department ON role.department_id = department.id;`, (err, rows) => {
                    console.table(rows);
                });
                break;
            case 'View all employees':
                db.query(`Select employee.*, role.title AS title, role.salary AS salary, role.department_id AS department_id
                        FROM employee
                        LEFT JOIN role ON employee.role_id = role.id;`, (err, rows) => {
                    console.table(rows);
                });
                break;
            case 'Add a department':
                addDep();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmp();
                break;
            case 'Update an employee role':
                updateEmp();
                break;
        }
    });
};

promptUser();