const express = require("express");
const cors = require("cors");
const ApiRoutes = require("./routes/ApiRoutes");
const HealthRoutes = require("./routes/HealthRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ApiRoutes);
app.use("/health", HealthRoutes);

app.listen(8000, () => {
  console.log("Server started");
});
