import express from "express";
import dotenv from "dotenv";
import { pool } from "./db.js";
import { user } from "./router/user.js";
import { category } from "./router/category.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8001;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/users", user);
app.use("/category", category);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
