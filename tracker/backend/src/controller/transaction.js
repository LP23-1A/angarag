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

export const createTransaction = async (_, res) => {
  try {
    const tableQueryText = `
      CREATE TABLE IF NOT EXISTS transactions (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id uuid REFERENCES users(id),
        name TEXT,
        amount REAL NOT NULL,
        transaction_type VARCHAR(3) CHECK (transaction_type IN ('INC', 'EXP')),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id uuid REFERENCES category(id)
    )`;

    await pool.query(tableQueryText);
    res.send("table created");
  } catch (error) {
    console.error(error);
  }
};

export const addTransaction = async (req, response) => {
  const { name, description, createAt, updateAt, category_id } = req.body;
  try {
    const queryText =
      "INSERT INTO transactions (name) VALUES ($1) RETURNING *";
    const res = await pool.query(queryText, [name]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};

export const getTransaction = async (req, response) => {
  const { name, description, createAt, updateAt, category_image } = req.body;
  try {
    const queryText =
      "INSERT INTO transactions (name, description, createAt, updateAt, category_image) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(queryText, [name, description]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};

export const deleteTranscation = async (req, response) => {
  try {
    const queryText = `DROP TABLE IF EXISTS transaction;`;
    await pool.query(queryText);
    response.send("deleted transaction table");
  } catch (error) {
    console.log(error);
  }
};
