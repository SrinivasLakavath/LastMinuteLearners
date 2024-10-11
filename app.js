const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("./api/models/db"); // Ensure your MongoDB connection is established

const indexRouter = require("./server/routes/index"); // Index/Home routes
const courseRouter = require("./server/routes/courseRoutes"); // Course routes
const app = express();

// View engine setup
app.set("views", path.join(__dirname, "server", "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set up routes
app.use("/", indexRouter); // Home routes or general routes
app.use("/courses", courseRouter); // All course-related routes, including reviews

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
