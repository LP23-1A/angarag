// import { pool } from "./db.js";

// app.get("/user", async (req, res) => {
//     try {
//       const queryText =
//         `SELECT * FROM users`;
//       const response = await pool.query(queryText);
//       res.send(response.rows);
//     } catch (error) {
//       console.error(error);
//     }
//   });
  
//   app.get("/users", async (req, res) => {
//     const { name, email } = req.body;
//     try {
//       const queryText =
//         `SELECT * FROM users WHERE name='${name}' OR email='${email}'`;
//       const response = await pool.query(queryText);
//       res.send(response.rows);
//     } catch (error) {
//       console.error(error);
//     }
//   });

//   app.post("/user", async (req, response) => {
//     const { name, email } = req.body;
//     console.log(name, email, 'req.body');
//     try {
//       const queryText =
//         "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
//       const res = await pool.query(queryText, [name, email]);
//       response.send(res.rows[0])
//     } catch (error) {
//       console.error(error);
//       response.send('error query')
//     }
//   });
  
//   app.delete("/user", async (req, response) => {
//     const { name, email, id } = req.body;
  
//     try {
//       const queryText = `DELETE FROM users WHERE (name = '${name}' AND email = '${email}') OR id = '${id}'`;
//       await pool.query(queryText);
//       response.send("ok");
//     } catch (error) {
//       response.send("error").end();
//       console.error(error);
//     }
//   });
  
//   app.put("/user", async (req, response) => {
//     const { name, email, id } = req.body;
  
//     try {
//       const queryText = `UPDATE users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
//       await pool.query(queryText);
//       response.send("updated");
//     } catch (error) {
//       response.send("error").end();
//       console.error(error);
//     }
//   });

  import { pool } from "../db.js";

export const getUsers =  async (req, res) => {
    try {
      const queryText =
        `SELECT * FROM users`;
      const response = await pool.query(queryText);
      res.send(response.rows);
    } catch (error) {
      console.error(error);
    }
  };

 export const getOneUser =  async (req, res) => {
     console.log(req.body);
  const { email, password } = req.body;
  try {
    const queryText =
      `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
    const response = await pool.query(queryText);
   if (response.rows.length !== 0){
      res.send("success");
   }
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const addColumn =  async (req, response) => {
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

  export const createUser =  async (req, response) => {
    const { name, email, password} = req.body;
    // console.log(name, email, 'req.body');
    try {
      const queryText =
        `INSERT INTO users (name, email, password) 
        VALUES ($1, $2, $3) RETURNING *`;
      const res = await pool.query(queryText, [name, email, password]);
      console.log(res);
      response.send(res.rows[0])
    } catch (error) {
      console.error(error);
      response.send('error')
    }
  };

  export const createTable =  async (_, res) => {
    try {
      const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )`;
  
      // const createQuery = `CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)`
      const created = await pool.query(tableQueryText);
      res.json({ created });
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deleteUser =  async (req, response) => {
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
  
  export const updateUser =  async (req, response) => {
    const { name, email, id, password, avatar_img, createdAt, updatedAt, currency_type } = req.body;
  
    try {
      const queryText = `UPDATE users SET name = '${name}', email = '${email}',password = '${password}', avatar_img = '${avatar_img}', createdAt = '${createdAt}', updatedAt = '${updatedAt}', currency_type = '${currency_type}'  WHERE id = '${id}'`;
      await pool.query(queryText);
      response.send("updated");
    } catch (error) {
      response.send("error").end();
      console.error(error);
    }
  };