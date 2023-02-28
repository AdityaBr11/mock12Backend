const express = require("express");
const { item, createPost, getAllPostedItem, deleteProduct } = require("../controller/postController");
const router = express.Router();

router.route("/").get(getAllPostedItem).post(createPost)
router.route("/post/:id").delete(deleteProduct)

module.exports=router