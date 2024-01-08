import express from "express";
import dotenv from "dotenv";
import { pool } from "./db.js";
import { user } from "./router/user.js";
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors({origin : "*"}))

app.use('/users', user)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});




// app.get("/user", async (req, res) => {
//   try {
//     const queryText =
//       `SELECT * FROM users`;
//     const response = await pool.query(queryText);
//     res.send(response.rows);
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.get("/users", async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     const queryText =
//       `SELECT * FROM users WHERE name='${name}' OR email='${email}'`;
//     const response = await pool.query(queryText);
//     res.send(response.rows);
//   } catch (error) {
//     console.error(error);
//   }
// });


// app.post("/user", async (req, response) => {
//   const { name, email } = req.body;
//   console.log(name, email, 'req.body');
//   try {
//     const queryText =
//       "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
//     const res = await pool.query(queryText, [name, email]);
//     response.send(res.rows[0])
//   } catch (error) {
//     console.error(error);
//     response.send('error query')
//   }
// });

// app.delete("/user", async (req, response) => {
//   const { name, email, id } = req.body;

//   try {
//     const queryText = `DELETE FROM users WHERE (name = '${name}' AND email = '${email}') OR id = '${id}'`;
//     await pool.query(queryText);
//     response.send("ok");
//   } catch (error) {
//     response.send("error").end();
//     console.error(error);
//   }
// });

// app.put("/user", async (req, response) => {
//   const { name, email, id } = req.body;

//   try {
//     const queryText = `UPDATE users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
//     await pool.query(queryText);
//     response.send("updated");
//   } catch (error) {
//     response.send("error").end();
//     console.error(error);
//   }
// });

// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     require: true,
//   },
// });

// async function getPostgresVersion() {
//   const client = await pool.connect();
//   try {
//     const response = await client.query('SELECT version()');
//     console.log(response.rows[0]);
//   } finally {
//     client.release();
//   }
// }

// import express, { request, response } from 'express';
// import bp from 'body-parser';
// import mongoose, { get, mongo } from 'mongoose';
// import Url from './Schema/Url.js'
// import dotenv from "dotenv"
// import { nanoid } from "nanoid";
// const PORT = 8000;
// const MONGODB_URL = 'mongodb+srv://admin:1234@cluster0.bbg8bpy.mongodb.net/?retryWrites=true&w=majority'
// dotenv.config()
// const app = express();
// app.use(bp.json());

// app.get('/' , async (_,response) => {
//   const res = await Url.find();
//   response.send(res).end();
// })

// app.get("/:url", async (request, response) => {
//   const { url } = request.params;

//   const res = await Url.findOne({
//     shortUrl: url,
//   });
//   response.redirect(res.longUrl);
// });

// app.post('/' , async (request,response) => {
//   const {url} = request.body;
//   const newUrl = await Url.create({
//     longUrl: url,
//     shortUrl: nanoid(10),
//   });
//   response.send({ success: true, url: newUrl }).end();
// })

// app.delete("/:url", async (request, response) => {
//   const { url } = request.params;

//   const { acknowledged, deletedCount } = await Url.deleteOne({
//     shortUrl: url,
//   });
//   response.send({ success: acknowledged, removedCount: deletedCount }).end();
// });

// app.listen(PORT, async () => {
//   try {
//     await mongoose.connect(MONGODB_URL);
//   } catch (error) {
//     console.log('error');
//   }
//   console.log('connected');
// })

// getPostgresVersion();