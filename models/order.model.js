var mongoose = require("mongoose");
var orderSchema = new mongoose.Schema({
    order_name: String,
    cost: Number,
    name: String,
    email_id: String,
    address: String,
    city: String,
    state: String,
    Zip: Number,
    nameoncard: String,
    ccn: String,
    expmonth: Number,
    expyear: Number,
    cvv: Number,
});
module.exports = mongoose.model("Order", orderSchema);