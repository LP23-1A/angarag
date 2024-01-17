import  express from "express";

import {
    getTransaction,
    addTransaction,
    createTransaction
} from '../controller/transaction.js'

const transaction = express.Router();

transaction.route('/').post(createTransaction);
transaction.route('/adddata').post(addTransaction);
transaction.route('/getdata').get(getTransaction);
export {transaction};