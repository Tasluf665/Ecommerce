require("express-async-errors");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const error = require("./middlewares/error");
const userRouter = require("./routers/userRouter");
const categoryRouter = require("./routers/categoryRouter");

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use(error);
module.exports = app;
