"use strict";

// const Course = require("../../api/models/course");
// // Function to add a review to a specific course
// const addReview = async (req, res) => {
//   const courseId = req.params.id;
//   const { author, rating, reviewText } = req.body;
//   try {
//     // Find the course by ID
//     const course = await Course.findById(courseId).exec();
//     if (!course) {
//       return res.status(404).send("Course not found");
//     }
//     // Create a new review object
//     const newReview = {
//       author,
//       rating,
//       reviewText,
//       timestamp: new Date().toLocaleString(),
//     };
//     // Push the new review to the course's reviews array
//     course.reviews.push(newReview);
//     await course.save();
//     // Redirect to the course detail page after adding the review
//     res.redirect(`/courses/${courseId}`);
//   } catch (error) {
//     res.status(500).send("Error adding review: " + error);
//   }
// };
// // Function to list all reviews from all courses
// const reviewList = async (req, res) => {
//   try {
//     // Fetch all courses and extract reviews
//     const courses = await Course.find().exec();
//     const allReviews = courses.map(course => course.reviews).flat();
//     // Render the review list page with extracted reviews
//     res.render("reviewList", { reviews: allReviews });
//   } catch (error) {
//     res.status(500).send("Error retrieving reviews: " + error.message);
//   }
// };
// module.exports = {
//   addReview,
//   reviewList,
// };
var Course = require("../../api/models/course"); // Function to add a review to a specific course


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
            timestamp: new Date() // Include time for better detail

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
}; // Function to list all reviews for a specific course


var reviewList = function reviewList(req, res) {
  var courseId, course;
  return regeneratorRuntime.async(function reviewList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          courseId = req.params.id; // Get course ID from the request parameters

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 4:
          course = _context2.sent;

          if (course) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).send("Course not found"));

        case 7:
          // Render the course details page with reviews
          res.render("courseDetails", {
            course: course // Pass the course object to the view

          });
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).send("Error retrieving reviews: " + _context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

module.exports = {
  addReview: addReview,
  reviewList: reviewList
};
//# sourceMappingURL=reviewController.dev.js.map
