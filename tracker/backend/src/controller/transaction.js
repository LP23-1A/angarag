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
  const { user_id, name, amount, transaction_type, description, category_id } = req.body;
  try {
    const queryText = `
      INSERT INTO transactions (user_id, name, amount, transaction_type, description, category_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`;
    const res = await pool.query(queryText, [user_id, name, amount, transaction_type, description, category_id]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};

// const createTransaction = async (req, res) => {
//   const { user_id, name, amount, transaction_type, description, category_id } = req.body;
//   try {
//     const insertQuery = `
//       INSERT INTO transactions (user_id, name, amount, transaction_type, description, category_id)
//       VALUES ($1, $2, $3, $4, $5, $6)
//       RETURNING *`;

//     const result = await pool.query(insertQuery, [user_id, name, amount, transaction_type, description, category_id]);
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

export const getTransaction = async (req, res) => {

  try {
    const queryText = `SELECT name FROM transactions `;
    const response = await pool.query(queryText);
    console.log(response.rows)
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTransaction = async (req, response) => {
  try {
    const queryText = `DROP TABLE IF EXISTS transaction;`;
    await pool.query(queryText);
    response.send("deleted transaction table");
  } catch (error) {
    console.log(error);
  }
};

export const updateTransaction = async (req, response) => {
  const { id } = req.params;
  const {user_id, name, amount, transaction_type, description, category_id} = req.body;

  try {
    const queryText = `
      UPDATE transactions
      SET user_id = $1, name = $2, amount = $3, transaction_type = $4, description = $5, category_id = $6
      WHERE id = $7
      RETURNING *`;
      const result = await pool.query(queryText, [user_id, name, amount, transaction_type, description, category_id, id]);
      res.send(result.rows[0]).end();
  } catch (error) {
    response.send("error").end();
    console.error(error);
  }
};
