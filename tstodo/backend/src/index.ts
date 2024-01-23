import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./utils/database";
const PORT = 8000;

dotenv.config();

const start = () => {
    const app = express();
    connectDatabase();

    app.get('/', (req, res) => {
        res.status(200).send({success:true, msg:'hello world'})
    })

    app.listen(PORT, () => {
        console.log("server runiing");
        
    })
}

start();