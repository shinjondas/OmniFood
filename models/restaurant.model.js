var mongoose = require("mongoose");
var restaurantSchema = new mongoose.Schema({
  restName:String,
  username:String,
  password:String,
});
module.exports = mongoose.model("Restaurant", restaurantSchema);