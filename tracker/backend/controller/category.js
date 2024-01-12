import { pool } from "../db";

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
    const { name, description, createAt, updateAt, category_image } = req.body;
    try {
      const queryText =
        `INSERT INTO users (name, description, createAt, updateAt, category_image) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`;
      const res = await pool.query(queryText, [name, description, createAt, updateAt, category_image]);
      console.log(res, "okey");
      response.send(res.rows[0])
    } catch (error) {
      console.error(error);
      response.send('error')
    }
  };