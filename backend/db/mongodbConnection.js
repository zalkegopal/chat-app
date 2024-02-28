import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connected to mongodb')
    } catch (error) {
        console.log('Error: ', error)
    }
}