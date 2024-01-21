const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rejisterjack:8082@mongocluster.mtr76km.mongodb.net/paytm-exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Database connected");
});