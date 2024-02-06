// import  mongoose  from "mongoose";

// const connectDatabase = async()=> {
//     try {
//     const MONGODB_URL = process.env.DB_URL || '';
//     await mongoose.connect(MONGODB_URL);
//     console.log('Database connections is successful');}
//     catch(error:unknown){
//          throw new Error('Database cannot connected',);
//     }
// }
// export {connectDatabase};
import mongoose from 'mongoose';

export const connectDb = async () => {
  const URI = 'mongodb+srv://Food:1234@cluster0.bbg8bpy.mongodb.net/foodDelivery?retryWrites=true&w=majority';
  await mongoose.connect(URI);
};