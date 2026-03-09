import express from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./db/queries/employees.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});
app.get("/employees", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});
app.post("/employees", async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0)
    return res.sendStatus(400);
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || salary === undefined) return res.sendStatus(400);
  const employee = await createEmployee({ name, birthday, salary });
  res.status(201).send(employee);
});

app.get("/employees/:id", async (req, res) => {
  const employee = await getEmployee(req.params.id);
  if (!employee) return res.sendStatus(404);
  res.send(employee);
});

app.delete("/employees/:id", async (req, res) => {
  const employee = await deleteEmployee(req.params.id);
  if (!employee) return res.sendStatus(404);
  res.sendStatus(204);
});

app.put("/employees/:id", async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0)
  return res.sendStatus(400);
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || salary === undefined) return res.sendStatus(400);
  const employee = await updateEmployee({
    id: req.params.id,
    name,
    birthday,
    salary,
  });
  if (!employee) return res.sendStatus(404);
  res.send(employee);
});

export default app;

// TODO: this file!
