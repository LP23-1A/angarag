import  express from "express";
import {
    createCategory,
    addCategory,
    getCategory,
    deleteCategory
} from '../controller/category.js'
const category = express.Router()

category.route('/').post(createCategory);
category.route('/adddata').post(addCategory);
category.route('/getdata').post(getCategory);
category.route('/del').delete(deleteCategory);
export {category};