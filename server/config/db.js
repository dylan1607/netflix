const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        });
        console.log("Connected to Mongoose Database");
    } catch (error) {
        console.error(`Database connect failed - ${error}`);
        process.exit(1);
    }
}

module.exports = connectdb;