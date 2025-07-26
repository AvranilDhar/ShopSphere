import dotenv from "dotenv";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\nMONGODB CONNECTED !! HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`\nMONGODB CONNECTION ERROR !! ${error}` );
        process.exit(1);
    }
}

export default connectDB;