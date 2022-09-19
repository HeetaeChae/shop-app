import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    comment: String,
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = { Comment };
