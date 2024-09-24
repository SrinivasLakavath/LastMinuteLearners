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
const Course = require("../../api/models/course");

// Function to add a review to a specific course
const addReview = async (req, res) => {
  const courseId = req.params.id;
  const { author, rating, reviewText } = req.body;

  try {
    // Find the course by ID
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).send("Course not found");
    }

    // Create a new review object
    const newReview = {
      author,
      rating,
      reviewText,
      timestamp: new Date(), // Include time for better detail
    };

    // Push the new review to the course's reviews array
    course.reviews.push(newReview);
    await course.save();

    // Redirect to the course detail page after adding the review
    res.redirect(`/courses/${courseId}`);
  } catch (error) {
    res.status(500).send("Error adding review: " + error);
  }
};

// Function to list all reviews for a specific course
const reviewList = async (req, res) => {
  const courseId = req.params.id; // Get course ID from the request parameters

  try {
    // Find the course by ID and populate the reviews
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).send("Course not found");
    }

    // Render the course details page with reviews
    res.render("courseDetails", {
      course: course, // Pass the course object to the view
    });
  } catch (error) {
    res.status(500).send("Error retrieving reviews: " + error);
  }
};

module.exports = {
  addReview,
  reviewList,
};
