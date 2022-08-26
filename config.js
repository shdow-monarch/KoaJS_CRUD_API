const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected"));
