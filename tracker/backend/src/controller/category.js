import { pool } from "../db.js";

const enableUuidOsspExtensionQuery =
  'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"';
pool.query(enableUuidOsspExtensionQuery, (err, result) => {
  if (err) {
    console.error("Error enabling uuid-ossp extension:", err);
  } else {
    console.log("uuid-ossp extension enabled");
  }
});

export const createCategory = async (_, res) => {
  try {
    // const tableQueryText = `
    // CREATE TABLE IF NOT EXISTS category (
    //   id uuid PRIMARY KEY DEFAULT uuid_generate_v4() ,
    //   name VARCHAR(255) NOT NULL,
    //   description VARCHAR(255) UNIQUE,
    //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //   category_img VARCHAR(50)
    // `;

    const tableQueryText = `
      CREATE TABLE IF NOT EXISTS category (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name TEXT,
      description TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_img text
    )`;

    // const tableQueryText = `
    // DROP TABLE category`;

    const created = await pool.query(tableQueryText);
    res.json({ created });
    res.send("table created");
  } catch (error) {
    console.error(error);
  }
};

export const addCategory = async (req, response) => {
  const { name} = req.body;
  console.log(req.body);
  try {
    const queryText = `INSERT INTO category ( name)  VALUES ($1) RETURNING *`;
    const res = await pool.query(queryText, [name,]);
    console.log(res, "okey");
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error");
  }
};

export const getCategory = async (req, res) => {
  try {
    const queryText = `SELECT * FROM category`;
    const response = await pool.query(queryText);
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
};
