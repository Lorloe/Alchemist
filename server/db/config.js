const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/NaCl";
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        await mongoose.connect( url,{
            //useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        });
        
        console.log('MONGODB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
