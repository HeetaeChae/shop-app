import express from "express";
import { Comment } from "../models/Comment";

const router = express.Router();

router.post("/regComment", (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    Comment.find({ _id: comment._id }).exec((err, doc) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      res.status(200).json({ success: true, doc });
    });
  });
});

router.post("/getComments", (req, res) => {
  const obj = JSON.stringify({ id: req.body.id });
  console.log(obj);
  Comment.find().exec((err, doc) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    res.status(200).json({ success: true, doc });
  });
});

module.exports = router;
