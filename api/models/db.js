const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/LML'; // Update with your MongoDB URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection established successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

module.exports = mongoose;
