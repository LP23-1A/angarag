import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String
});

const UserModel = mongoose.model('User', UserSchema);

export { UserModel };