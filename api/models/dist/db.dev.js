"use strict";

var mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables from .env file
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/LML'; 


var dbURI = process.env.MONGODB_URI || 'mongodb+srv://22eg106b31:123@cluster0.sn08o.mongodb.net/LML?retryWrites=true&w=majority'; // Update with your MongoDB URI

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('Database connection established successfully');
})["catch"](function (err) {
  console.error('Database connection error:', err);
});
module.exports = mongoose;
//# sourceMappingURL=db.dev.js.map
