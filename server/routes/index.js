const express = require("express");
const router = express.Router();
const courseRoutes = require("./courseRoutes");
const reviewRoutes = require("./reviewRoutes"); // Assuming you'll add this later

// Serve the About page
router.get("/about", (req, res) => {
  res.render("about"); // Render your about page
});

// Use the defined routes for courses and reviews
router.use("/courses", courseRoutes); // All course routes will now start with /courses
router.use("/courses/:courseId/reviews", reviewRoutes); // Review routes related to courses

// You may also define a root route if needed
router.get("/", (req, res) => {
  res.render("index"); // Render your home page
});

module.exports = router;
