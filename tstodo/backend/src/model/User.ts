import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: Buffer

});

const UseModel = mongoose.model('User', UserSchema)

export {UseModel};