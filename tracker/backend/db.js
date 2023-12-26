import pg from "pg";
import dotenv from "dotenv"
import { text } from "express";

const { Pool } = pg

dotenv.config();

console.log(process.env.DB_URL);

export const pool = new Pool({
    ssl:true,
    connectionString:process.env.DB_URL
})

pool.connect();
pool.query()

console.log(pool);

module.exports = {
  query: (text, params) => pool.query(text,params)
} 