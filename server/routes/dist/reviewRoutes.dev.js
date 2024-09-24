"use strict";

var express = require("express");

var router = express.Router();

var ctrlReviews = require("../controllers/reviewController"); // Define routes for reviews


router.get("/reviews", ctrlReviews.reviewList); // List all reviews
// Add other review-related routes as needed

module.exports = router;
//# sourceMappingURL=reviewRoutes.dev.js.map
