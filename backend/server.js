const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/authRoute");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
