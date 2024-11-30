// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const substitutionRoutes = require("./routes/substitution");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Routes
app.use("/api/substitution", substitutionRoutes);
app.get("/test-connection", (req, res) => {
  res.status(200).json({ message: "Connection successful!" });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
