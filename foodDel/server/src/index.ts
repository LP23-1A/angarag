// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// dotenv.config();
// const PORT = process.env.PORT || 8000;

// const start = () => {
//   const app = express();
//   const _PORT = 8000;
//   app.use(express.json());
//   app.use(cors());

//   app.get("/", (req, res) => {
//     res.status(200).send({ success: true, msg: "Working" });
//   });

//   app.listen(PORT, () => {
//     console.log("Server success");
//   });
// };
// start();


// import express from 'express';
// import { auth } from './router/auth';
// import { connectDb } from './utils/database';

// connectDb();

// const start = () => {
//   const app = express();
//   app.use(express.json());

//   app.use('/auth', auth);

//   app.get('/', (_req, res) => {
//     res.send('Hello');
//   });

//   const PORT = 8000;

//   app.listen(PORT, () => {
//     console.log('Server is success');
//   });
// };

// start();


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDatabase } from "./utils/database";
import { auth } from "./router/auth";
import {order} from "./router/order"
import { food } from "./router/food";
import { category } from "./router/category";
dotenv.config();
const PORT = process.env.PORT || 8000;
connectDatabase();
const start = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use('/auth', auth);
  app.use('/order',order);
  app.use('/food',food);
  app.use('/category',category);

  app.get("/", (_req, res) => {
    res.status(200).send({ success: true, msg: "Working" });
  });

  app.listen(PORT, () => {
    console.log("Server is running!!!");
  });
};
start();