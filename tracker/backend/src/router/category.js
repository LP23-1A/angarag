import  express from "express";
import {
    createCategory,
    addCategory,
    getCategory
} from '../controller/category.js'
const category = express.Router()

category.route('/').post(createCategory);
category.route('/adddata').post(addCategory);
category.route('/getdata').post(getCategory);
export {category};