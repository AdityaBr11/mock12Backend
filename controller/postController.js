const { PostModel } = require("../models/iteam.model");
const mongoose=require("mongoose")

exports.item = (req, res) => {
  res.status(200).json({
    success: "true",
    message: "working fine",
  });
};

exports.createPost = async (req, res) => {
  const post = await PostModel.create(req.body);
  res.status(201).send({
    success: true,
    post,
  });
};

exports.getAllPostedItem = async (req, res) => {
  const { category, page, limit, date,q } = req.query;

  if (category) {
    let post = await PostModel.find({ category: category })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).send({
      success: true,
      post,
    });
  } else if (date) {
    if (date === "asc") {
      let post = await PostModel.find()
        .sort({
          postedAt: 1,
        })
        .skip((page - 1) * limit)
        .limit(limit);
      res.status(200).send({
        success: true,
        post,
      });
    }else if (date === "desc") {
        let post = await PostModel.find()
          .sort({
            postedAt: -1,
          })
          .skip((page - 1) * limit)
          .limit(limit);
        res.status(200).send({
          success: true,
          post,
        });
      }
  }else if (q) {
    const post = await PostModel.find({
      name: { $regex: q, $options: "i" },
    });
    res.status(200).send({
      success: true,
      post,
    });
  }
   else {
    const post = await PostModel.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(201).send({
      success: true,
      post,
    });
  }
};

exports.deleteProduct = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
  
    if (!post) {
      res.status(401).send({
        sucess:false,
        message:"Post is not found with this id"
      })
    }
    await PostModel.findByIdAndDelete(req.params.id)
    return res.status(200).send({
      sucess: true,
      message: "Post deleted sucessfully",
    });
  };
