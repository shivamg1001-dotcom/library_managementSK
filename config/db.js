const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/library_managementSK";

    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        console.warn("Continuing without MongoDB connection. Verify MONGO_URI or local MongoDB availability.");
        return null;
    }
};

module.exports = connectDB;