const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.route");
//ussrs import ->

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", userRouter);

//Hoem ->
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/users");
//route is not found error
app.use((req, res, next) => {
  res.status(404).json({ message: "route is not found!" });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Somthing broke!",
  });
});
module.exports = app;
