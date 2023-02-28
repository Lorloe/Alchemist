const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/NaCl";
mongoose.set("strictQuery", true);

const userRouter = require('./routes/user');
const elementRouter = require('./routes/element');

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

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', userRouter);
app.use('/api/element', elementRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));