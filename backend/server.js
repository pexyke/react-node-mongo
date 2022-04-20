require("dotenv").config();
const express = require("express");
const app = express();
const port = 4001;
const cors = require("cors");
const mongoose = require("mongoose");

// controllers
const getData = require("./controllers/getData");
const { createUsers } = require("./controllers/controllers");
// routes
const usersRoutes = require("./routes/users");

app.use(cors());
app.use(express.json());

// mountpoints
app.use("/api/users", usersRoutes);

// establishing connection
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// dropping database if it exists
mongoose.connection.dropDatabase();

//fetch data from api and populate database
getData()
  .then((data) => createUsers(data))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Nigerian Prince is listening on port ${port}`);
});

/*

*/
