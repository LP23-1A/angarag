import express from 'express';
import { login, signUp } from '../controller/user';

const auth = express.Router();

auth.route('/signup').post(signUp);
auth.route('/login').post(login);

export { auth };