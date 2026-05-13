const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./Config/db");      // capital C
const caseRoutes = require("./Routes/caseRoutes");  // capital R

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./Swagger/swagger");   // capital S

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", caseRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
