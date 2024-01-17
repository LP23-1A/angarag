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

export const getUsers = async (req, res) => {
  try {
    const queryText = `SELECT * FROM users`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const getOneUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const queryText = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
    const response = await pool.query(queryText);
    if (response.rows.length !== 0) {
      res.send("success");
    }
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const addColumn = async (req, response) => {
  try {
    const queryText = `ALTER TABLE users
    ADD COLUMN avatar_img bytea,
     ADD COLUMN createdAt TIMESTAMP,
     ADD COLUMN updatedAt TIMESTAMP,
    ADD COLUMN currency_type TEXT DEFAULT 'MNT'`;
    // const queryText = `
    //     ALTER TABLE users
    //     ADD COLUMN avatar_img bytea,
    //     ADD COLUMN createdAt TIMESTAMP,
    //     ADD COLUMN updatedAt TIMESTAMP,
    //     ADD COLUMN currency_type TEXT DEFAULT 'MNT'
    //     `;

    await pool.query(queryText);
    response.send("okey");
  } catch (error) {
    response.send("error").end();
    console.error(error);
  }
};

export const createUser = async (req, response) => {
  const { name, email, password, currency_type } = req.body;
  // console.log(name, email, 'req.body');
  try {
    const queryText = `INSERT INTO users (name, email, password, currency_type) 
        VALUES ($1, $2, $3, $4) RETURNING *`;
    const res = await pool.query(queryText, [
      name,
      email,
      password,
      currency_type,
    ]);
    console.log(res, "okey");
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error");
  }
};

export const createTable = async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4() ,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE,
      password VARCHAR(255) NOT NULL,
      avatarimg BYTEA,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type VARCHAR(50)
    )`;

    //  const tableQueryText = `
    // DROP TABLE users`;

    // const createQuery = `CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)`
    const created = await pool.query(tableQueryText);
    res.json({ created });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (req, response) => {
  const { name, email, id } = req.body;

  try {
    const queryText = `DELETE FROM users WHERE (name = '${name}' AND email = '${email}') OR id = '${id}'`;
    await pool.query(queryText);
    response.send("success");
  } catch (error) {
    response.send("error").end();
    console.error(error);
  }
};

export const updateUser = async (req, response) => {
  const {
    name,
    email,
    id,
    password,
    avatar_img,
    createdAt,
    updatedAt,
    currency_type,
  } = req.body;

  try {
    const queryText = `UPDATE users SET name = '${name}', email = '${email}',password = '${password}', avatar_img = '${avatar_img}', createdAt = '${createdAt}', updatedAt = '${updatedAt}', currency_type = '${currency_type}'  WHERE id = '${id}'`;
    await pool.query(queryText);
    response.send("updated");
  } catch (error) {
    response.send("error").end();
    console.error(error);
  }
};
