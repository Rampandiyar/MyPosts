const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true,
  },
  detail: String,
});

module.exports = mongoose.model("post", postSchema);
