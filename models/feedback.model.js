var mongoose = require("mongoose");
var feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
module.exports = mongoose.model("Feedback", feedbackSchema);