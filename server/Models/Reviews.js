const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const ReviewsSchema = mongoose.Schema({
  product_id: { type: ObjectId,require:true},
  user_id: { type: ObjectId ,require:true },
  reviews: { type: String ,require:true },
  rating: { type: Number ,require:true },
  postedOn:{type:Date,require:true }
});

module.exports = mongoose.model("Reviews", ReviewsSchema);
