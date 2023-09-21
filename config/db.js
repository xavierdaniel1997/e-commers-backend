const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
      useUnifiedTopology: true,
        })
        console.log("MongoDB connection successfull");
    } catch (error) {
        console.error( error, "MongoDB connection Failed");
    }
}

module.exports = connectDB