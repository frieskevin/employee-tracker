INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Swamps'),
    ('Mopping'),
    ('Fire');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Supreme Overlord', 666666.66, 2),
    ('Mop Lord', 3434.33, 3),
    ('Head Fireperson', 234234.33, 4),
    ('Fireperson', 12333.33, 4),
    ('Accountant', 2134234.12, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ('Greg', 'Lord', 1, null),
    ('Giovanni', 'Smith', 2, 1),
    ('CottonEye', 'Joe', 3, 1),
    ('Kazuhira', 'Miller', 4, 3),
    ('Elden', 'John', 4, 3),
    ('Colonel', 'Volgin', 5, 1);