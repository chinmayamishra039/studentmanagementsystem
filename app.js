const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const bodyparser = require("body-parser");
require("./helpers/init_mongodb"); //database connection
const UserRoute = require("./routes/user_routes");

const PORT = process.env.PORT || 8888;
const app = express();
app.use(morgan("dev")); //u have to always write below app() to show console of url

//To parse the request body and view it in console
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  res.send("HEllo From Student Portal");
});
app.use("/student", UserRoute);
//if no route maches it will handle error
//it will create error object
app.use(async (req, res, next) => {
  next(createHttpError.NotFound());
});
//handle error
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
