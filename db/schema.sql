

DROP TABLE IF EXISTS employees;


CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    birthday DATE,
    salary INTEGER  
);
