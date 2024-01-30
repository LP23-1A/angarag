import mongoose from "mongoose";

 export const connectDatabase = async() => {
    try{
        const MONGODB_URL = 'mongodb+srv://admin:1234@cluster0.bbg8bpy.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(MONGODB_URL);
    console.log('dataabase connected success');
    } catch (error:unknown) {
        throw new Error ('database cannot connected')
    }
    
}