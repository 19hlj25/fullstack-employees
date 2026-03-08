import db from "./client.js";
import { createEmployee } from "./queries/employees.js";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    { name: "Alice Johnson", birthday: "1990-04-12", salary: 90000 },
    { name: "Michael Chen", birthday: "1988-09-23", salary: 85000 },
    { name: "Sofia Martinez", birthday: "1992-01-15", salary: 92000 },
    { name: "David Patel", birthday: "1985-07-30", salary: 98000 },
    { name: "Emily Nguyen", birthday: "1993-11-05", salary: 87000 },
    { name: "Jordan Thompson", birthday: "1991-03-18", salary: 91000 },
    { name: "Liam O’Connor", birthday: "1987-06-09", salary: 94000 },
    { name: "Ava Robinson", birthday: "1994-02-27", salary: 88000 },
    { name: "Noah Williams", birthday: "1989-12-14", salary: 96000 },
    { name: "Isabella Garcia", birthday: "1995-08-21", salary: 89000 },
  ];
  for (const employee of employees) {
    await db.query(
      `INSERT INTO employees ( name, birthday, salary)VALUES ($1, $2, $3)`,
      [employee.name, employee.birthday, employee.salary],
    );
  }
}
