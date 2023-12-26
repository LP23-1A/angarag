import dotenv from "dotenv"
import postgres from "postgres"
import { Express } from "express"
import db from "db "


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