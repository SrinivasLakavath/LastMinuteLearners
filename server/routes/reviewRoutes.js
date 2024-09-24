const express = require("express");
const router = express.Router();
const ctrlReviews = require("../controllers/reviewController");

// Define routes for reviews
router.get("/reviews", ctrlReviews.reviewList); // List all reviews

// Add other review-related routes as needed
module.exports = router;
