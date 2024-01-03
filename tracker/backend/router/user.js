import  express from "express";
import {
    addColumn,
    createUser,
    deleteUser,
    getOneUser,
    getUsers,
    updateUser,

} from '../controller/user.js'
const user = express.Router() 
user.route('/').get(getUsers).post(createUser);
user.route('/addColumn').put(addColumn);
user.route('/user').get(getOneUser).delete(deleteUser).put(updateUser);

export {user};