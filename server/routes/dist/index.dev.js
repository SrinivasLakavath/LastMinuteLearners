"use strict";

var express = require("express");

var router = express.Router();

var courseRoutes = require("./courseRoutes"); // Include course routes
// Serve the About page


router.get("/about", function (req, res) {
  res.render("about"); // Render your about page
}); // Use the defined routes for courses

router.use("/courses", courseRoutes); // All course routes will now start with /courses
// Define a root route for the homepage

router.get("/", function (req, res) {
  res.render("index"); // Render your home page
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
