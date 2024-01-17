import express from "express";
import dotenv from "dotenv";
import { pool } from "./src/db.js";
import { user } from "./src/router/user.js";
import { category } from "./src/router/category.js";
import { transaction } from "./src/router/transaction.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8001;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/users", user);
app.use("/category", category);
app.use("/transaction", transaction);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
