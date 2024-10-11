"use strict";

// /server/controllers/courseController.js
var Course = require("../../api/models/course"); // Adjust the path as necessary
// Controller to render the course list view


exports.getCourseListView = function _callee(req, res) {
  var courses;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Course.find().exec());

        case 3:
          courses = _context.sent;
          // Fetch all courses
          res.render("courseList", {
            courses: courses
          }); // Render the course list view

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).send("Error retrieving courses: " + _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Controller to render the course details view


exports.getCourseDetailsView = function _callee2(req, res) {
  var courseId, course;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          courseId = req.params.id;
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
          res.render("courseDetails", {
            course: course
          }); // Render the course details view

          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).send("Error retrieving course: " + _context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; // Controller to handle adding a review to a course (view-side)


exports.addReviewView = function _callee3(req, res) {
  var courseId, _req$body, author, rating, reviewText, course, newReview;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          courseId = req.params.id;
          _req$body = req.body, author = _req$body.author, rating = _req$body.rating, reviewText = _req$body.reviewText;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 5:
          course = _context3.sent;

          if (course) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).send("Course not found"));

        case 8:
          newReview = {
            author: author,
            rating: rating,
            reviewText: reviewText,
            timestamp: new Date()
          };
          course.reviews.push(newReview); // Add the new review to the course's reviews array

          _context3.next = 12;
          return regeneratorRuntime.awrap(course.save());

        case 12:
          // Save the updated course
          res.redirect("/courses/".concat(courseId)); // Redirect to the course details page

          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](2);
          res.status(500).send("Error adding review: " + _context3.t0);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 15]]);
};
//# sourceMappingURL=courseController.dev.js.map
