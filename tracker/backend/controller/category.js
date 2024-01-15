import { pool } from "../db.js";

  export const createCategory =  async (_, res) => {
    try {
      const tableQueryText = `
        CREATE TABLE IF NOT EXISTS category (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255 ) NOT NULL,
        description TEXT,
        createdAt TIMESTAMP,
        updatedAt TIMESTAMP,
        category_img text
      )`; 
      const created = await pool.query(tableQueryText);
      res.json({ created });
      res.send("table created")
    } catch (error) {
      console.error(error);
    }
  };


  export const addCategory =  async (req, response) => {
    const { id, name, description,createdAt, updatedAt, category_img } = req.body;
    try {
      const queryText =
        `INSERT INTO category (id, name, description,createdAt, updatedAt, category_img) 
        VALUES ($1, $2, $3, $4, $5,$6) RETURNING *`;
      const res = await pool.query(queryText, [id, name, description,createdAt, updatedAt, category_img]);
      console.log(res, "okey");
      response.send(res.rows[0])
    } catch (error) {
      console.error(error);
      response.send('error')
    }
  };

  export const getCategory =  async (req, res) => {
    const { name } = req.body;
    try {
        const queryText =
     `SELECT * FROM category WHERE name='${name}'`;
        const response = await pool.query(queryText);
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
  };