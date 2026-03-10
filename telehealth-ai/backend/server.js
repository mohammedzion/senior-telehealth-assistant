const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const patientRoutes = require("./routes/patientRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);

app.get("/", (req, res) => {
  res.send("Telehealth Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});