const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb+srv://bayush1298_db_user:<db_password>@cluster0.srj53qw.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// API
app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});