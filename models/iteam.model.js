const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please enter name"] },
  description: { type: String, required: [true, "Please enter description"] },
  category: { type: String, required: [true, "Please enter category"] },
  image: { type: String, required: [true, "Please enter imageUrl"] },
  location: { type: String, required: [true, "Please enter location"] },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  price: { type: String, required: [true, "Please enter price"] },
});

const PostModel = mongoose.model("PostItems", postSchema);

module.exports = {
  PostModel,
};
