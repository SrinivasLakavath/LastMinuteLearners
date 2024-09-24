"use strict";

var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost:27017/LML'; // Update with your MongoDB URI

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
