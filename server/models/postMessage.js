const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: [true, "please enter a title"] },
  message: String,
  name: String,
  creator: String,
  tags: { type: [String], required: [true, "please enter at least one tag"] },
  selectedFile: { type: String, required: [true, "please select a file"] },
  price: Number,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
