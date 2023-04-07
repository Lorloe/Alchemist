const dotenv = require("dotenv");
const express = require("express");
const route = require("./routes");
const connectDB = require("./db/config");
const PORT = 5000;

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

route(app);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
