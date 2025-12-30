import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Check if MONGODB_URI exists
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        // Connect to MongoDB
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }       
}