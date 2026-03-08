import db from "../client.js";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const sql =
    `INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3) RETURING *`;
  const {rows} = await db.query(SQL, [name, birthday, salary]);
  return rows[0];
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const SQL = `SELECT * FROM employees`;
  const {rows} = await db.query(SQL)
  return rows;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const SQL = `SELECT * FROM employees WHERE id = $1`;
  const {rows} = await db.query(SQL, [id]);
  return rows[0];
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, emp_name, birthday, salary }) {
  const SQL = `UPDATE employees SET emp_name = $1, birthday = $2, salary = $3 WHERE id = $4 RETURNING *`
  const {rows} = await db.query( SQL,
    [emp_name, birthday, salary, id],
  );
  return rows[0];
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const SQL = `
    DELETE FROM employees
    WHERE id = $1;
    REURNING *
  `;

  const { rows } = await db.query(SQL, [id]);
  return rows[0];
}
