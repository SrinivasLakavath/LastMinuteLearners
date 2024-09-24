"use strict";

var Course = require("../api/models/course"); // Function to add a review to a specific course


var addReview = function addReview(req, res) {
  var courseId, _req$body, author, rating, reviewText, course, newReview;

  return regeneratorRuntime.async(function addReview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          courseId = req.params.id;
          _req$body = req.body, author = _req$body.author, rating = _req$body.rating, reviewText = _req$body.reviewText;
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 5:
          course = _context.sent;

          if (course) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(404).send("Course not found"));

        case 8:
          // Create a new review object
          newReview = {
            author: author,
            rating: rating,
            reviewText: reviewText,
            timestamp: new Date().toLocaleString() // Include time for better detail

          }; // Push the new review to the course's reviews array

          course.reviews.push(newReview);
          _context.next = 12;
          return regeneratorRuntime.awrap(course.save());

        case 12:
          // Redirect to the course detail page after adding the review
          res.redirect("/courses/".concat(courseId));
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          res.status(500).send("Error adding review: " + _context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 15]]);
};

module.exports = {
  addReview: addReview
};
//# sourceMappingURL=reviewcontrollers.dev.js.map
