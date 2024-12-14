import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Function to connect to the database with try and catch exceptions
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // 1 means exit with failure, 0 means exit with success
	}
};
