const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const complaintsRouter = require("./routes/complaintRoutes");
const donationRouter = require("./routes/DonationRoutes");
const healthRouter = require("./routes/healthRoutes");
const sessionRouter = require("./routes/healthSessionRoutes");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useUnifiedTopology: true,
});

//routers
app.use("/complaints", complaintsRouter);
app.use("/donations", donationRouter);
app.use("/healthPosts", healthRouter);
app.use("/healthSessions", sessionRouter);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});

module.exports = app;
