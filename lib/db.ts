import mongoose from "mongoose";

let isConnected = false

export const connectDB = async () => {
    if (isConnected) {
        console.log("Already connected to MongoDB")
        return
    }

    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: process.env.MONGODB_DB_NAME,
        })

        isConnected = connection.connections[0].readyState === 1
        console.log("Connected to MongoDB")
        return connection
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
        throw new Error("Could not connect to MongoDB")
    }
}