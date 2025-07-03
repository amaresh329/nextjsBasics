import mongoose from "mongoose";
export const DBconnection=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("connection successful to DB")
    } catch (error) {
        console.log(error)
    }
}