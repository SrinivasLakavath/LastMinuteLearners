// /server/controllers/courseController.js
const Course = require("../../api/models/course"); // Adjust the path as necessary

// Controller to render the course list view
exports.getCourseListView = async (req, res) => {
  try {
    const courses = await Course.find().exec(); // Fetch all courses
    res.render("courseList", { courses }); // Render the course list view
  } catch (error) {
    res.status(500).send("Error retrieving courses: " + error);
  }
};

// Controller to render the course details view
exports.getCourseDetailsView = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findById(courseId).exec(); // Fetch course by ID
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.render("courseDetails", { course }); // Render the course details view
  } catch (error) {
    res.status(500).send("Error retrieving course: " + error);
  }
};
// Controller to handle adding a review to a course (view-side)
exports.addReviewView = async (req, res) => {
  const courseId = req.params.id;
  const { author, rating, reviewText } = req.body;

  try {
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).send("Course not found");
    }

    const newReview = {
      author,
      rating,
      reviewText,
      timestamp: new Date(),
    };

    course.reviews.push(newReview); // Add the new review to the course's reviews array
    await course.save(); // Save the updated course

    res.redirect(`/courses/${courseId}`); // Redirect to the course details page
  } catch (error) {
    res.status(500).send("Error adding review: " + error);
  }
};

