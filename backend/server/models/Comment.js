import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  comment: String,
  createdAt: String,
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = { Comment };
