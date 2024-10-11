const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://22eg106b31:123@cluster0.sn08o.mongodb.net/LML?retryWrites=true&w=majority'; // Update with your MongoDB URI
// const dbURI = 'mongodb://localhost:27017/LML';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection established successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

module.exports = mongoose;
