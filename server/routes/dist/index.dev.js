"use strict";

var express = require("express");

var router = express.Router();

var courseRoutes = require("./courseRoutes");

var reviewRoutes = require("./reviewRoutes"); // Assuming you'll add this later
// Serve the About page


router.get("/about", function (req, res) {
  res.render("about"); // Render your about page
}); // Use the defined routes for courses and reviews

router.use("/courses", courseRoutes); // All course routes will now start with /courses

router.use("/courses/:courseId/reviews", reviewRoutes); // Review routes related to courses
// You may also define a root route if needed

router.get("/", function (req, res) {
  res.render("index"); // Render your home page
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
