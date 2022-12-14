import express from "express";
import multer from "multer";

import { Product } from "../models/Product";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  //이미지 파일 저장하기
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/upload", (req, res) => {
  const product = new Product(req.body);
  product.save((err, doc) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true, doc });
  });
});

router.post("/skipProducts", (req, res) => {
  const { skip } = req.body;
  Product.find()
    .skip(skip)
    .limit(8)
    .exec((err, doc) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res
        .status(200)
        .json({ success: true, doc, docNumber: doc.length });
    });
});

router.post("/allProducts", (req, res) => {
  Product.find().exec((err, doc) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true, doc });
  });
});

router.post("/detail", (req, res) => {
  const id = req.body.id;
  Product.find({ _id: id }).exec((err, doc) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true, doc });
  });
});

module.exports = router;
