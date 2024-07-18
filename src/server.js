const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
connectDB();

const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
