const dotenv = require("dotenv");
const express = require("express");
const route = require("./routes");
const cookieParser = require('cookie-parser');
const connectDB = require("./db/config");
const cors = require('cors');
const PORT = 5000;

dotenv.config();

const app = express();

app.use(express.json());

connectDB();
app.use(cookieParser())
app.use(cors({  
  origin: ["http://localhost:3000"],
  credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false,limit: '50mb',parameterLimit: 1000000}));
route(app);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
