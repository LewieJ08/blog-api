const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB database connected successfully.");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connectDB;