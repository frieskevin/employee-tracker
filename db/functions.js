const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./connection');

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
        console.log('Department added.');
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
        console.log('Role added.');
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
        console.log('Employee added.');
    });
};

const updateEmp = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'Which employee do you want to update?',
            choices: ['Greg Lord', 'Giovanni Smith', 'CottonEye Joe', 'Kazuhira Miller', 'Elden John', 'Colonel Volgin']
        },
        {
            type: 'input',
            name: 'new_role',
            message: 'Enter new role ID.'
        }
    ])
    .then(answers => {
        let employee
        switch(answers.name) {
            case 'Greg Lord':
                employee = 'Greg';
                break;
            case 'Giovanni Smith':
                employee = 'Giovanni';
                break;
            case 'CottonEye Joe':
                employee = 'CottonEye';
                break;
            case 'Kazuhira Miller':
                employee = 'Kazuhira';
                break;
            case 'Elden John':
                employee = 'Elden';
                break;
            case 'Colonel Volgin':
                employee = 'Colonel';
                break;
        }
        db.query(`UPDATE employee SET role_id = ${answers.new_role} WHERE first_name = ${employee}`, (err, rows) => {});
    console.log('Employee Updated.');
    });
}

module.exports = {addDep, addRole, addEmp, updateEmp};