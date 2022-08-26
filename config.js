const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
});
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected"));
