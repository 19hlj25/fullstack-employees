import pg from "pg";
const client = new pg.Client({
  database: "fullstack_employees",
});
export default client;