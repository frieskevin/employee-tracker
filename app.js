const inquirer = require('inquirer');
const db = require('./db/connection')
const cTable = require('console.table');

const addDep = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Enter department name.'
        }
    ])
    .then(answers => {
        db.query(`INSERT INTO department (name)
                    VALUES ('${answers.department}');`, (err, rows) => {});
    });
};

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'Enter role name.'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter role salary.'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter department ID of role.'
        }
    ])
    .then(answers => {
        db.query(`INSERT INTO role (title, salary, department_id)
                    VALUES ('${answers.role}', ${answers.salary}, ${answers.department_id});`, (err, rows) => {});
    });
};

const addEmp = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter first name.'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter last name.'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter role ID of employee.'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter manager ID of employee.'
        }
    ])
    .then(answers => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                    VALUES ('${answers.first_name}', '${answers.last_name}', ${answers.role_id}, ${answers.manager_id});`, (err, rows) => {});
    });
};

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
                db.query(``, (err, rows) => {
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
                
                break;
        }
    });
};

promptUser();