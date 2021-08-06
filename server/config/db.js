require('dotenv').config();
const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("Connected to Mongoose Database");
    } catch (error) {
        onsole.error("Database connect failed");
        process.exit(1);
    }
}

module.exports = connectdb;