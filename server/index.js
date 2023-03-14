const dotenv = require("dotenv");
const express = require("express");
const route = require("./routes");
const connectDB = require("./db/config");
const cors = require('cors');
const PORT = 5000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
connectDB();

route(app);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
