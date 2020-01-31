const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                // server: {
                //     socketOptions: {
                //         socketTimeoutMS: 0,
                //         connectionTimeout: 0
                //     }
                // }
            });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;